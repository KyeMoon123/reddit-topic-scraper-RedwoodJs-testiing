import { Autocomplete, Chip, TextField } from '@mui/material'
import type {
  FindEditTopicQuery,
  FindEditTopicQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTopicQuery($id: Int!) {
    topic: topic(id: $id) {
      id
      name
      description
    }
    subredditsOnTopic(id: $id) {
      subreddit {
        channel_name
        ext_id
        id
        search_name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditTopicQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topic,
  subredditsOnTopic,
}: CellSuccessProps<FindEditTopicQuery, FindEditTopicQueryVariables>) => {
  const [value, setValue] = React.useState()
  return (
    <div className="  flex flex-col space-y-7">
      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs"
        value={topic.name}
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
        value={topic.description}
      />
      {console.log(subredditsOnTopic)}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        multiple
        id="tags-filled"
        options={subredditsOnTopic}
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
    </div>
  )
}
