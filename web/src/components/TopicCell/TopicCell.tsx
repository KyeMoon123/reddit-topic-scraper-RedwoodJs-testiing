import {gql} from '@apollo/client'
import {Stack} from '@mui/material'
import {FindTopicQuery, FindTopicQueryVariables} from "types/graphql";
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'

import EditTopicButtonGroup from '../EditTopicButtonGroup/EditTopicButtonGroup'
import LeadsTableCell from '../LeadsTableCell'
import * as React from "react";

export const QUERY = gql`
  query FindTopicQuery($id: Int!) {
    topic(id: $id) {
      description
      id
      name

      SubredditsOnTopic {
        subreddit {
          channel_name
        }
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}: CellFailureProps) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({topic}: CellSuccessProps<FindTopicQuery,FindTopicQueryVariables>) => {
  return (
    <div className="">
      <div className="flex space-x-4">
        <h1 className=" text-6xl font-extrabold">Leads found for topic: </h1>
        <h1 className=" text-6xl font-extrabold text-secondary">{topic.name} </h1>
      </div>

      <h2 className="flex py-8 text-2xl">{topic.description}</h2>
      <div className="py-4">
        <div className="flex justify-between">
          <Stack direction="row" spacing={1}>
            {topic.SubredditsOnTopic.map((sub) => {
              return (
                <span
                  key={sub.subreddit.channel_name}
                  className="badge badge-primary rounded-md "
                >{sub.subreddit.channel_name}</span>
              )
            })}
          </Stack>
          <div className="flex space-x-4">
            <EditTopicButtonGroup topicId={topic.id}/>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="flex py-4 text-2xl font-bold">Recommended Leads</h2>
        <LeadsTableCell topicId={topic.id}/>
      </div>
    </div>
  )
}


