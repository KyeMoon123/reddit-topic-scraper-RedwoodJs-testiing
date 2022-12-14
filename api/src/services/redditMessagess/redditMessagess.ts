import type {
  QueryResolvers,
  MutationResolvers,
  RedditMessagesRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const redditMessagess: QueryResolvers['redditMessagess'] = () => {
  return db.redditMessages.findMany()
}

export const redditMessages: QueryResolvers['redditMessages'] = ({ id }) => {
  return db.redditMessages.findUnique({
    where: { id },
  })
}

export const createRedditMessages: MutationResolvers['createRedditMessages'] =
  ({ input }) => {
    return db.redditMessages.create({
      data: input,
    })
  }

export const updateRedditMessages: MutationResolvers['updateRedditMessages'] =
  ({ id, input }) => {
    return db.redditMessages.update({
      data: input,
      where: { id },
    })
  }

export const deleteRedditMessages: MutationResolvers['deleteRedditMessages'] =
  ({ id }) => {
    return db.redditMessages.delete({
      where: { id },
    })
  }

export const RedditMessages: RedditMessagesRelationResolvers = {
  RecommendedOnTopic: (_obj, { root }) => {
    return db.redditMessages
      .findUnique({ where: { id: root?.id } })
      .RecommendedOnTopic()
  },
}
