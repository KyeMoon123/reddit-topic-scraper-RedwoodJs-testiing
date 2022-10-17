import type {
  QueryResolvers,
  MutationResolvers,
  RecommendedOnTopicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recommendedOnTopics: QueryResolvers['recommendedOnTopics'] =
  () => {
    return db.recommendedOnTopic.findMany()
  }

export const recommendedOnTopic: QueryResolvers['recommendedOnTopic'] = async ({
  id,
}) => {
  return await db.recommendedOnTopic.findMany({
    where: { topicId: id },
  })
}

export const createRecommendedOnTopic: MutationResolvers['createRecommendedOnTopic'] =
  ({ input }) => {
    return db.recommendedOnTopic.create({
      data: input,
    })
  }

export const updateRecommendedOnTopic: MutationResolvers['updateRecommendedOnTopic'] =
  ({ id, input }) => {
    return db.recommendedOnTopic.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecommendedOnTopic: MutationResolvers['deleteRecommendedOnTopic'] =
  ({ id }) => {
    return db.recommendedOnTopic.delete({
      where: { id },
    })
  }

export const RecommendedOnTopic: RecommendedOnTopicRelationResolvers = {
  recommended: (_obj, { root }) => {
    return db.recommendedOnTopic
      .findUnique({ where: { id: root?.id } })
      .recommended()
  },
  topic: (_obj, { root }) => {
    return db.recommendedOnTopic.findUnique({ where: { id: root?.id } }).topic()
  },
}
