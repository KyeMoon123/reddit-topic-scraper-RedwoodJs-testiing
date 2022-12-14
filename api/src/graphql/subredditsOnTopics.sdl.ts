export const schema = gql`
  type SubredditsOnTopic {
    id: Int!
    subreddit_id: String!
    topic_id: Int!
    subreddit: Subreddit!
    Topic: Topic!
  }

  type Query {
    subredditsOnTopics: [SubredditsOnTopic!]! @skipAuth
    subredditsOnTopic(id: Int!): [SubredditsOnTopic!]! @skipAuth
  }

  input CreateSubredditsOnTopicInput {
    subreddit_id: String!
    topic_id: Int!
  }

  input UpdateSubredditsOnTopicInput {
    subreddit_id: String
    topic_id: Int
  }

  type Mutation {
    createSubredditsOnTopic(
      input: CreateSubredditsOnTopicInput!
    ): SubredditsOnTopic! @skipAuth
    updateSubredditsOnTopic(
      id: Int!
      input: UpdateSubredditsOnTopicInput!
    ): SubredditsOnTopic! @skipAuth
    deleteSubredditsOnTopic(id: Int!): SubredditsOnTopic! @skipAuth
  }
`
