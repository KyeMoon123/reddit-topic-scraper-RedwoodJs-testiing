import {gql, useMutation} from '@apollo/client'
import TopicForm from "src/components/TopicForm/TopicForm";

import {useAuth} from '@redwoodjs/auth'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import * as React from "react";
import {navigate, routes} from "@redwoodjs/router";
import {useState} from "react";
import {useTopicsContext} from "../../../providers/context/TopicsContext";
import {SubredditsQuery, SubredditsQueryVariables, Topic} from "types/graphql";
import {CREATE_NEW_TOPIC} from "src/utils/Mutations/TopicMutations";

export const QUERY = gql`
  query SubredditsQuery {
    subreddits {
      id
      channel_name
      ext_id
    }
  }
`

interface NewTopicInput {
  name: string;
  description: string;
  userId: string;
  subreddits: number[];
}



export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}: CellFailureProps) => (
  <div style={{color: 'red'}}>Error: {error.message}</div>
)

export const Success = ({subreddits}: CellSuccessProps<SubredditsQuery,SubredditsQueryVariables>) => {
  const {userMetadata} = useAuth()
  const [subredditsList, setSubredditsList] = React.useState([])
  const [loadingModal, setLoadingModal] = useState(false)
  const [name, setName] = React.useState<string | undefined>()
  const [description, setDescription] = React.useState<string | undefined>()
  const context = useTopicsContext()

  const [CreateNewTopic] = useMutation<{ createTopic: Topic; id: number }, { input: NewTopicInput }>
  (CREATE_NEW_TOPIC, {
    variables: {
      input: {
        name: name,
        description: description,
        userId: userMetadata.sub,
        subreddits: subredditsList.map(sub => sub.id)
      }
    }
  })

  const handleSubmit =  () => {
    setLoadingModal(true)
   CreateNewTopic().then(async (res) => {
      await context.onChange()
      navigate(routes.topic({id: res.data.createTopic.id}))
    })
  }

  return (
    <>
      <div className="text-4xl font-bold">Create a new topic</div>
      <div className={'divider'}></div>
      {loadingModal == false ? (<>
        <div className={''}>
          <TopicForm
            subreddits={subreddits}
            setName={setName}
            setSubredditsList={setSubredditsList}
            setDescription={setDescription}
            handleSubmit={handleSubmit}
            action={"create"}
          />
        </div>
      </>) : (<>
        Just a second while we find your leads!
      </>)}

    </>
  )
}
