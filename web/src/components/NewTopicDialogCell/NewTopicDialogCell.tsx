import { gql, useMutation } from '@apollo/client'
import AddIcon from '@mui/icons-material/Add'
import { Autocomplete, Chip, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import type { SubredditsQuery } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query SubredditsQuery {
    subreddits {
      id
      channel_name
      ext_id
    }
  }
`
const CREATE_NEW_TOPIC = gql`
  mutation CreateNewTopic(
    $name: String!
    $description: String!
    $userId: String!
    $subreddits: [String]
  ) {
    createTopic(
      input: {
        name: $name
        description: $description
        userId: $userId
        subreddits: $subreddits
      }
    ) {
      topicId
    }
  }
`
const SEARCH_NEW_RECOMMENDED = gql`
  mutation SearchNewRecommended(
    $query: String!
    $subreddits: [String]!
    $topicId: Int!
  ) {
    searchNewRecommended(
      input: { query: $query, subreddits: $subreddits, topicId: $topicId }
    ) {
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ subreddits }: CellSuccessProps<SubredditsQuery>) => {
  const { userMetadata } = useAuth()
  const [value, setValue] = React.useState([])
  const [name, setName] = React.useState<string | undefined>()
  const [description, setDescription] = React.useState<string | undefined>()

  const [open, setOpen] = React.useState(false)

  const [CreateNewTopic, { data: CreateNewTopicData }] =
    useMutation(CREATE_NEW_TOPIC)

  const [SearchNewRecommended, { data: SearchNewRecommendedData }] =
    useMutation(SEARCH_NEW_RECOMMENDED)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleSubmit = () => {
    const result = value.map((value) => value.ext_id)
    CreateNewTopic({
      variables: {
        name: name,
        description: description,
        userId: userMetadata.sub,
        subreddits: result,
      },
    }).then((res) => {
      SearchNewRecommended({
        variables: {
          query: description,
          subreddits: result,
          topicId: res.data.createTopic.topicId,
        },
      })
    })
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="p-8">
        <div className="text-5xl font-bold">Create a new topic</div>
        <DialogContent className="space-y-6">
          <DialogContentText></DialogContentText>
          <div>
            <div className="flex font-bold ">Topic Name</div>
            <TextField
              margin="dense"
              id="name"
              label="What is your product?"
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div>
            <div className="flex font-bold ">Describe your product</div>
            <TextField
              multiline
              margin="dense"
              id="description"
              label="Give us a brief and concise desciption of your product"
              fullWidth
              variant="outlined"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value)
              }}
            />
          </div>

          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            multiple
            id="tags-filled"
            options={subreddits}
            getOptionLabel={(option) => option.channel_name}
            freeSolo
            renderTags={(value: object[], getTagProps) =>
              value.map((option: object, index: number) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option.channel_name}
                  {...getTagProps(index)}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Subreddits"
                placeholder="Search for a subreddit"
              />
            )}
          />
          <div></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </div>
    </>
  )
}
