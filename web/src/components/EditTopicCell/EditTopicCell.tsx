import {gql, useMutation} from '@apollo/client'
import TopicForm from "src/components/TopicForm/TopicForm";
import {useAuth} from '@redwoodjs/auth'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import * as React from "react";
import {EditTopicQuery, EditTopicQueryVariables, UpdateTopicInput} from "types/graphql";
import {UPDATE_TOPIC} from "src/utils/Mutations/TopicMutations";
import {navigate, routes} from "@redwoodjs/router";

export const QUERY = gql`
  query EditTopicQuery($id: Int!) {
    subreddits {
      id
      channel_name
      ext_id
    }
    topic(id: $id) {
      id
      name
      description
    }
    subredditsOnTopic(id: $id) {
      subreddit {
        id
        channel_name
        ext_id
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}: CellFailureProps) => (
  <div style={{color: 'red'}}>Error: {error.message}</div>
)

export const Success = ({subreddits, subredditsOnTopic, topic}: CellSuccessProps<EditTopicQuery,EditTopicQueryVariables>) => {
  const {userMetadata} = useAuth()

  const [subredditsList, setSubredditsList] = React.useState([])
  const [name, setName] = React.useState<string | undefined>()
  const [description, setDescription] = React.useState<string | undefined>()

  const [UpdateTopic] = useMutation<{input: UpdateTopicInput}>
  (UPDATE_TOPIC,{variables:{
      id: topic.id,
      input:{
        name:name,
        description:description,
        userId: userMetadata.sub,
        subreddits: subredditsList.map(sub=>sub.id)
      }
    }})

  const handleSubmit=()=>{
    UpdateTopic().then(() => navigate(routes.dashboard()))
  }
  return (
    <>
    <div className="flex space-x-4">
      <h1 className=" text-6xl font-extrabold">Edit Topic: </h1>
      <h1 className=" text-6xl font-extrabold text-secondary">{topic.name} </h1>
    </div>
      <TopicForm
        subreddits={subreddits}
        subredditsOnTopic={subredditsOnTopic}
        setName={setName}
        setSubredditsList={setSubredditsList}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
        action={"edit"}
        topic={topic}
      />
    </>
  )
}
