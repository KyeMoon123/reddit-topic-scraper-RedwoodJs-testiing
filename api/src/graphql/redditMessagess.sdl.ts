export const schema = gql`
  type RedditMessages {
    id: Int!
    reddit_id: String
    channel_id: String
    channel_name: String
    title: String
    self_text: String
    url: String
    score: Int
    RecommendedOnTopic: [RecommendedOnTopic]!
  }

  type Query {
    redditMessagess: [RedditMessages!]! @requireAuth
    redditMessages(id: Int!): RedditMessages @requireAuth
  }

  input CreateRedditMessagesInput {
    reddit_id: String
    channel_id: String
    channel_name: String
    title: String
    self_text: String
    url: String
    score: Int
  }

  input UpdateRedditMessagesInput {
    reddit_id: String
    channel_id: String
    channel_name: String
    title: String
    self_text: String
    url: String
    score: Int
  }

  type Mutation {
    createRedditMessages(input: CreateRedditMessagesInput!): RedditMessages!
      @requireAuth
    updateRedditMessages(
      id: Int!
      input: UpdateRedditMessagesInput!
    ): RedditMessages! @requireAuth
    deleteRedditMessages(id: Int!): RedditMessages! @requireAuth
  }
`
