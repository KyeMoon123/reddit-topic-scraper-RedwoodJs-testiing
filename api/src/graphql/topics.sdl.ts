export const schema = gql`
  type Topic {
    id: Int!
    name: String!
    description: String!
    userId: String!
    RecommendedOnTopic: [RecommendedOnTopic]!
    SubredditsOnTopic: [SubredditsOnTopic]!
  }

  type Query {
    topics(userId: String!): [Topic!]! @skipAuth
    topic(id: Int!): Topic @skipAuth
    getNewRecommended(input: SearchNewRecommendedInput!): [getNewRecommendedReturn!]! @skipAuth
  }

  input CreateTopicInput {
    name: String!
    description: String!
    userId: String!
    subreddits: [Int!]!
  }

  input UpdateTopicInput {
    name: String
    description: String
    userId: String
    subreddits: [Int!]!
  }

  input SearchNewRecommendedInput {
    topicId: Int!
    query: String!
    subreddits: [String!]!
  }
  type newRecommended {
    id: String!
    metadata: JSON!
    score: Int!
  }
  type getNewRecommendedReturn {
    id: Int!
    date_recommended: DateTime!
    recommended_id: String!
    topic_id: Int!
    score: Float!
  }

  type Mutation {
    createTopic(input: CreateTopicInput!): Topic! @skipAuth
    updateTopic(id: Int!, input: UpdateTopicInput!): Topic! @skipAuth
    deleteTopic(id: Int!): Topic! @skipAuth
  }
`
