import type {
  QueryResolvers,
  MutationResolvers,
  SubredditsOnTopicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const subredditsOnTopic: QueryResolvers['subredditsOnTopic'] = async ({
  id,
}) => {
  const getSubs = await db.subredditsOnTopic.findMany({
    where: { topicId: id },
  })
  console.log(getSubs)
  return getSubs
}

export const createSubredditsOnTopic: MutationResolvers['createSubredditsOnTopic'] =
  async ({ input }) => {
    const toadd = input.subredditId.map((id) => {
      return {
        topicId: input.topicId,
        subredditId: id,
      }
    })
    return await db.subredditsOnTopic.createMany({
      data: toadd,
    })
  }

export const updateSubredditsOnTopic: MutationResolvers['updateSubredditsOnTopic'] =
  ({ id, input }) => {
    return db.subredditsOnTopic.update({
      data: input,
      where: { id },
    })
  }

export const deleteSubredditsOnTopic: MutationResolvers['deleteSubredditsOnTopic'] =
  ({ id }) => {
    return db.subredditsOnTopic.delete({
      where: { id },
    })
  }

export const SubredditsOnTopic: SubredditsOnTopicRelationResolvers = {
  topic: (_obj, { root }) => {
    return db.subredditsOnTopic.findUnique({ where: { id: root?.id } }).topic()
  },
  subreddit: (_obj, { root }) => {
    return db.subredditsOnTopic
      .findUnique({ where: { id: root?.id } })
      .subreddit()
  },
}
