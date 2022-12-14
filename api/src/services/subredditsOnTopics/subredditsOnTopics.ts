import type {
  QueryResolvers,
  MutationResolvers,
  SubredditsOnTopicRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const subredditsOnTopics: QueryResolvers['subredditsOnTopics'] = () => {
  return db.subredditsOnTopic.findMany()
}

export const subredditsOnTopic: QueryResolvers['subredditsOnTopic'] = ({
  id,
}) => {
  return db.subredditsOnTopic.findMany({
    where: { topic_id: id },
  })
}

export const createSubredditsOnTopic: MutationResolvers['createSubredditsOnTopic'] =
  ({ input }) => {
    return db.subredditsOnTopic.create({
      data: input,
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
  subreddit: (_obj, { root }) => {
    return db.subredditsOnTopic
      .findUnique({ where: { id: root?.id } })
      .subreddit()
  },
  Topic: (_obj, { root }) => {
    return db.subredditsOnTopic.findUnique({ where: { id: root?.id } }).Topic()
  },
}
