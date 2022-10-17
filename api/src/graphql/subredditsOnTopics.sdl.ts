export const schema = gql`
  type SubredditsOnTopic {
    id: Int
    topicId: Int
    topic: Topic
    subreddit: Subreddit
  }

  type Query {
    subredditsOnTopics: [SubredditsOnTopic!]! @requireAuth
    subredditsOnTopic(id: Int!): [SubredditsOnTopic] @skipAuth
  }

  input CreateSubredditsOnTopicInput {
    topicId: Int!
    subredditId: [Int]!
  }
  type CreateReturnType {
    count: Int
  }

  input UpdateSubredditsOnTopicInput {
    topicId: Int
    subredditId: Int
  }

  type Mutation {
    createSubredditsOnTopic(
      input: CreateSubredditsOnTopicInput!
    ): CreateReturnType @requireAuth
    updateSubredditsOnTopic(
      id: Int!
      input: UpdateSubredditsOnTopicInput!
    ): SubredditsOnTopic! @requireAuth
    deleteSubredditsOnTopic(id: Int!): SubredditsOnTopic! @requireAuth
  }
`
