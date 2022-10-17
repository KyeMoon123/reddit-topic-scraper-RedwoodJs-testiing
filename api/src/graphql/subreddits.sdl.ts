export const schema = gql`
  type Subreddit {
    id: Int!
    channel_name: String!
    ext_id: String!
    search_name: String!
    topics: [SubredditsOnTopic]!
  }

  type Query {
    subreddits: [Subreddit!]! @requireAuth
    subreddit(id: Int!): Subreddit @requireAuth
  }

  input CreateSubredditInput {
    channel_name: String!
  }

  input UpdateSubredditInput {
    channel_name: String
  }

  type Mutation {
    createSubreddit(input: CreateSubredditInput!): Subreddit! @requireAuth
    updateSubreddit(id: Int!, input: UpdateSubredditInput!): Subreddit!
      @requireAuth
    deleteSubreddit(id: Int!): Subreddit! @requireAuth
  }
`
