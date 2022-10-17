import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import type {
  FindTopicListQuery,
  FindTopicListQueryVariables,
} from 'types/graphql'

import { NavLink, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query MyQuery {
    topics(userId: "auth0|632bf39eaf969d6dcfb63418") {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    {' '}
    <List>
      <ListItem disablePadding>
        <div className="px-4 font-semibold">
          <h4>You have no active topics!</h4>
        </div>
      </ListItem>
    </List>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindTopicListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topics,
}: CellSuccessProps<FindTopicListQuery, FindTopicListQueryVariables>) => {
  return (
    <div>
      <div className="flex justify-center pt-4 ">
        <NavLink to={routes.newTopic()}>
          <button className="flex btn btn-secondary btn-outline btn-wide justify-center py-2">
            Create a new topic
          </button>
        </NavLink>
      </div>

      <div className="divider text-white ">Topics</div>
      {topics.map((topic) => {
        return (
          <NavLink
            key={topic.id}
            className="flex   rounded-sm  p-4 font-semibold text-white hover:bg-primary"
            activeClassName="bg-primary"
            to={routes.topic({ id: topic.id })}
          >
            {topic.name}
          </NavLink>
        )
      })}
    </div>
  )
}
