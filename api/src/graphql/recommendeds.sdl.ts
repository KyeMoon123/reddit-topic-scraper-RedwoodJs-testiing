export const schema = gql`
  type Recommended {
    id: Int!
    reddit_id: String!
    channel_name: String!
    title: String!
    self_text: String!
    url: String!
    score: String!
    date_created: String!
    topics: [RecommendedOnTopic]!
  }

  type Query {
    recommendeds: [Recommended!]! @requireAuth
    recommended(id: Int!): Recommended @skipAuth
  }

  input CreateRecommendedInput {
    channelId: String!
    channelName: String!
    title: String!
    content: String!
    url: String!
    score: String!
  }

  input searchNewRecommendedInput {
    query: String!
    subreddits: [String]!
    topicId: Int!
  }
  type searchNewRecommendedResponse {
    reddit_id: String
    channel_id: String
    channel_name: String
    title: String
    url: String
    score: String
    self_text: String
    date_created: String
  }

  input UpdateRecommendedInput {
    channelId: String
    channelName: String
    title: String
    content: String
    url: String
    score: String
  }

  type Mutation {
    searchNewRecommended(
      input: searchNewRecommendedInput!
    ): [searchNewRecommendedResponse] @skipAuth
    createRecommended(input: CreateRecommendedInput!): Recommended! @requireAuth
    updateRecommended(id: Int!, input: UpdateRecommendedInput!): Recommended!
      @requireAuth
    deleteRecommended(id: Int!): Recommended! @requireAuth
  }
`
