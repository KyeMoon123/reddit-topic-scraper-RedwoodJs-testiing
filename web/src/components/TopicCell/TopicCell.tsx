import { gql, useMutation } from '@apollo/client'
import { Chip, Divider, Stack } from '@mui/material'
import type { FindTopicQuery, FindTopicQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import LeadsTableCell from '../LeadsTableCell'

interface Props {
  id: number
  name: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTopicQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topic,
  subreddits,
}: CellSuccessProps<FindTopicQuery, FindTopicQueryVariables>) => {
  return (
    <div className="">
      <div className="flex space-x-4">
        <h1 className=" text-6xl font-extrabold">Leads found for topic: </h1>
        <h1 className=" text-6xl font-extrabold text-accent"> {topic.name}</h1>
      </div>

      <h2 className="flex py-8 text-2xl">{topic.description}</h2>
      <div className="py-4">
        <div className="flex justify-between">
          <Stack direction="row" spacing={1}>
            {subreddits.map((sub) => {
              return (
                <span
                  key={sub.subreddit.id}
                  className="badge badge-accent rounded-md"
                >
                  {sub.subreddit.channel_name}
                </span>
              )
            })}
          </Stack>
          <div className="flex space-x-4">
            <button className="btn btn-primary rounded-md">Edit Topic</button>
            <button className="btn btn-secondary btn-outline rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="flex py-4 text-2xl font-bold">Recommended Leads</h2>
        <LeadsTableCell topicId={topic.id} />
      </div>
    </div>
  )
}

export const QUERY = gql`
  query FindTopicQuery($id: Int!) {
    topic: topic(id: $id) {
      id
      name
      description
    }
    subreddits: subredditsOnTopic(id: $id) {
      subreddit {
        channel_name
        ext_id
        id
        search_name
      }
    }
  }
`
