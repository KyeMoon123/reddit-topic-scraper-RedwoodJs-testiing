import type {
  QueryResolvers,
  MutationResolvers,
  SubredditRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const subreddits: QueryResolvers['subreddits'] = () => {
  return db.subreddit.findMany()
}

export const subreddit: QueryResolvers['subreddit'] = ({ id }) => {
  return db.subreddit.findUnique({
    where: { id },
  })
}

export const createSubreddit: MutationResolvers['createSubreddit'] = ({
  input,
}) => {
  return db.subreddit.create({
    data: input,
  })
}

export const updateSubreddit: MutationResolvers['updateSubreddit'] = ({
  id,
  input,
}) => {
  return db.subreddit.update({
    data: input,
    where: { id },
  })
}

export const deleteSubreddit: MutationResolvers['deleteSubreddit'] = ({
  id,
}) => {
  return db.subreddit.delete({
    where: { id },
  })
}

export const Subreddit: SubredditRelationResolvers = {
  SubredditsOnTopic: (_obj, { root }) => {
    return db.subreddit
      .findUnique({ where: { id: root?.id } })
      .SubredditsOnTopic()
  },
}
