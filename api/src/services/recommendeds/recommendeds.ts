import dayjs, { Dayjs } from 'dayjs'
import type {
  QueryResolvers,
  MutationResolvers,
  RecommendedRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { recommendedOnTopic } from '../recommendedOnTopics/recommendedOnTopics'

const axios = require('axios')

export const recommendeds: QueryResolvers['recommendeds'] = () => {
  return db.recommended.findMany()
}

export const recommended: QueryResolvers['recommended'] = ({ id }) => {
  return db.recommended.findUnique({
    where: { id },
  })
}

export const createRecommended: MutationResolvers['createRecommended'] = ({
  input,
}) => {
  return db.recommended.create({
    data: input,
  })
}
export const searchNewRecommended: MutationResolvers['searchNewRecommended'] =
  async ({ input }) => {
    const res = await axios({
      method: 'get',
      url: `http://127.0.0.1:8000/reddit/semanticquery/?query=${input.query}`,
      data: {
        subs: input.subreddits,
      },
    }).then(async (res) => {
      const createRecommended = await db.$transaction(
        res.data.map((recommended) =>
          db.recommended.create({
            data: recommended,
          })
        )
      )
      const recommendedOnTopic = createRecommended.map((recommended) => {
        return {
          recommendedId: recommended.id,
          topicId: input.topicId,
          date_recommended: dayjs().format(),
        }
      })
      return await db.recommendedOnTopic.createMany({
        data: recommendedOnTopic,
      })
    })
  }

export const updateRecommended: MutationResolvers['updateRecommended'] = ({
  id,
  input,
}) => {
  return db.recommended.update({
    data: input,
    where: { id },
  })
}

export const deleteRecommended: MutationResolvers['deleteRecommended'] = ({
  id,
}) => {
  return db.recommended.delete({
    where: { id },
  })
}

export const Recommended: RecommendedRelationResolvers = {
  topics: (_obj, { root }) => {
    return db.recommended.findUnique({ where: { id: root?.id } }).topics()
  },
}
