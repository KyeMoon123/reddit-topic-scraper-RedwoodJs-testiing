import React, {useContext, useEffect} from "react";
import {useLazyQuery} from "@apollo/client";

import {useAuth} from "@redwoodjs/auth";

export const QUERY = gql`
  query FindTopicsAccordionQuery($userId: String!) {
    userTopics: topics(userId: $userId) {
      id
      name
      description
      SubredditsOnTopic {
        subreddit {
          channel_name
        }
      }
    }
  }
`

const TopicsContext = React.createContext(undefined)

export function TopicProvider({ children }){
  const { userMetadata } = useAuth()
  const [updateTopics,{data,error,loading }] = useLazyQuery(QUERY, {
        variables: { userId: userMetadata?.sub },
  });
  const topics = data?.userTopics

  useEffect(()=>{
    updateTopicsContext()
  },[])

  const updateTopicsContext = ()=>{
    updateTopics()
  }
  if (error) {
    return <p>Something went wrong. Try to refresh the page.</p>
  }
  if (loading) {
return (
  <TopicsContext.Provider value={{loading: loading}}>
      {children}
    </TopicsContext.Provider>
)
  }

  return (
    <TopicsContext.Provider value={{topics: topics, onChange:updateTopicsContext, loading:loading}}>
      {children}
    </TopicsContext.Provider>
  )
}

export function useTopicsContext() {
  return useContext(TopicsContext)
}
