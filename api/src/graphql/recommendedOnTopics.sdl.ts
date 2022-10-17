export const schema = gql`
  type RecommendedOnTopic {
    id: Int!
    topicId: Int
    recommendedId: Int
    recommended: Recommended
    topic: Topic
    date_recommended: String
  }

  type Query {
    recommendedOnTopics: [RecommendedOnTopic!]! @skipAuth
    recommendedOnTopic(id: Int!): [RecommendedOnTopic] @skipAuth
  }

  input CreateRecommendedOnTopicInput {
    topicId: Int!
    recommendedId: Int!
    date_recommended: String
  }

  input UpdateRecommendedOnTopicInput {
    topicId: Int
    recommendedId: Int
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
