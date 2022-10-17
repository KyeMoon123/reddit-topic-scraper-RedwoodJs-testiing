import type {
  QueryResolvers,
  MutationResolvers,
  TopicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const topics: QueryResolvers['topics'] = (input) => {
  return db.topic.findMany({ where: { userId: input.userId } })
}

export const topic: QueryResolvers['topic'] = ({ id }) => {
  return db.topic.findUnique({
    where: { id },
  })
}

export const createTopic: MutationResolvers['createTopic'] = async ({
  input,
}) => {
  const topicId = await db.topic
    .create({
      data: {
        name: input.name,
        description: input.description,
        userId: input.userId,
      },
    })
    .then(async (res) => {
      const topicId = res.id
      const toadd = input.subreddits.map((id) => {
        return {
          topicId: res.id,
          subredditId: id,
        }
      })
      await db.subredditsOnTopic.createMany({
        data: toadd,
      })
      return topicId
    })
  return { topicId: topicId }
}

export const updateTopic: MutationResolvers['updateTopic'] = ({
  id,
  input,
}) => {
  return db.topic.update({
    data: input,
    where: { id },
  })
}

export const deleteTopic: MutationResolvers['deleteTopic'] = ({ id }) => {
  return db.topic.delete({
    where: { id },
  })
}

export const Topic: TopicRelationResolvers = {
  subreddits: (_obj, { root }) => {
    return db.topic.findUnique({ where: { id: root?.id } }).subreddits()
  },
}
