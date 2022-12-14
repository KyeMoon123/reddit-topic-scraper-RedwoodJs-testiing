export const schema = gql`
  type RecommendedOnTopic {
    id: Int!
    date_recommended: DateTime!
    recommended_id: String!
    topic_id: Int!
    score: Float!
    recommended: RedditMessages!
    topic: Topic!
  }

  type Query {
    recommendedOnTopics: [RecommendedOnTopic!]! @requireAuth
    recommendedOnTopic(id: Int!): [RecommendedOnTopic!]! @skipAuth
  }

  input CreateRecommendedOnTopicInput {
    date_recommended: DateTime!
    recommended_id: String!
    topic_id: Int!
    score: Float!
  }

  input UpdateRecommendedOnTopicInput {
    date_recommended: DateTime
    recommended_id: String
    topic_id: Int
    score: Float
  }

  type Mutation {
    createRecommendedOnTopic(
      input: CreateRecommendedOnTopicInput!
    ): RecommendedOnTopic! @requireAuth
    updateRecommendedOnTopic(
      id: Int!
      input: UpdateRecommendedOnTopicInput!
    ): RecommendedOnTopic! @requireAuth
    deleteRecommendedOnTopic(id: Int!): RecommendedOnTopic! @requireAuth
  }
`
