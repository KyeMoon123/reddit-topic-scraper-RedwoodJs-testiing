export const schema = gql`
  type Topic {
    id: Int!
    name: String!
    description: String!
    userId: String!
    subreddits: [SubredditsOnTopic]!
  }

  type Query {
    topics(userId: String!): [Topic!]! @requireAuth
    topic(id: Int!): Topic @skipAuth
  }

  input CreateTopicInput {
    name: String!
    description: String!
    userId: String!
    subreddits: [String]
  }
  type CreateReturnType {
    topicId: Int
  }

  input UpdateTopicInput {
    name: String
    description: String
    userId: String
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): CreateReturnType @skipAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @requireAuth
    deleteTopic(id: Int!): Topic! @requireAuth
  }
`
