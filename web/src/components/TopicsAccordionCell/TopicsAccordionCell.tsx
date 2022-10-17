import { useState } from 'react'

import type {
  FindTopicsAccordionQuery,
  FindTopicsAccordionQueryVariables,
} from 'types/graphql'

import { NavLink, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTopicsAccordionQuery($userId: String!) {
    userTopics: topics(userId: $userId) {
      description
      id
      name
      subreddits {
        subreddit {
          channel_name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    <div className="flex justify-center py-12">
      <h3 className="text-3xl font-semibold">
        You dont have any active topics, create one to get started
      </h3>
    </div>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindTopicsAccordionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userTopics,
}: CellSuccessProps<
  FindTopicsAccordionQuery,
  FindTopicsAccordionQueryVariables
>) => {
  return (
    <div className="overflow-x-auto">
      {console.log(userTopics)}
      <table className="table w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Subreddits</th>
          </tr>
        </thead>
        <tbody>
          {userTopics.map((topic) => {
            return (
              <tr key={topic.id}>
                <td className="font-bold text-primary underline">
                  <NavLink key={topic.id} to={routes.topic({ id: topic.id })}>
                    {topic.name}
                  </NavLink>
                </td>
                <td>{topic.description}</td>
                <td>
                  <div className="flex space-x-1 ">
                    {topic.subreddits.map((sub) => {
                      return (
                        <span
                          key={sub}
                          className="badge badge-primary rounded-md "
                        >
                          {sub.subreddit.channel_name}
                        </span>
                      )
                    })}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
