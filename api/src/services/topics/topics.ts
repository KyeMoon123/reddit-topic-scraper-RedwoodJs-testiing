import type {MutationResolvers, QueryResolvers, TopicRelationResolvers,} from 'types/graphql'

import {db} from 'src/lib/db'

const axios = require('axios').default;

export const topics: QueryResolvers['topics'] = (input) => {
  return db.topic.findMany({where: {userId: input.userId}})
}

export const topic: QueryResolvers['topic'] = ({id}) => {
  return db.topic.findUnique({
    where: {id},
  })
}

export const createTopic: MutationResolvers['createTopic'] = async ({input}) => {

  const subreddits = await db.subreddit.findMany({
    where: {id: {in: input.subreddits}}
  })

  const subredditsOnTopicCreate = subreddits ? {
    create:
      input.subreddits.map((sub) => {
        return {
          subreddit: {
            connect: {
              id: sub
            }
          }
        }
      })
  }:{}

  const newTopic = await db.topic.create({
    data: {
      name: input.name,
      description: input.description,
      userId: input.userId,
      SubredditsOnTopic: subredditsOnTopicCreate
    }
  })

  getNewRecommended({input: {subreddits: subreddits.map((sub)=>sub.ext_id), query:input.description,topicId: newTopic.id}})

  return newTopic
}

export const getNewRecommended: QueryResolvers["getNewRecommended"] = async ({input}) => {
  const data = JSON.stringify({
    "subreddits": input.subreddits,
    "query": input.query
  });
  const config = {
    method: 'post',
    url: 'http://127.0.0.1:8000/topic_query/recommended/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const response = await axios(config)
    .then(async function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })


  return Promise.all(
    response?.map(async (item) => {
      return await db.recommendedOnTopic.upsert({
        create: {
          recommended: {connect: {reddit_id: item.id}},
          topic: {connect: {id: input.topicId}},
          score: item.score
        },
        update: {},
        where: {
          topic_id_recommended_id: {topic_id: input.topicId, recommended_id: item.id}
        }
      })
    }))

}

export const updateTopic: MutationResolvers['updateTopic'] = ({
  id,
  input,
}) => {
  return db.topic.update({
    where: {id},
    data: {
      name: input.name,
      description: input.description,
      userId: input.userId,
      SubredditsOnTopic: {
        deleteMany: {},
        create:
          input.subreddits.map((sub) => {
            return {
              subreddit: {
                connect: {
                  id: sub
                }
              }
            }
          })
      }
    },
    include: {
      SubredditsOnTopic: true
    }
  })
}

export const deleteTopic: MutationResolvers['deleteTopic'] = ({id}) => {
  return db.topic.delete({
    where: {id},
  })
}

export const Topic: TopicRelationResolvers = {
  RecommendedOnTopic: (_obj, {root}) => {
    return db.topic.findUnique({where: {id: root?.id}}).RecommendedOnTopic()
  },
  SubredditsOnTopic: (_obj, {root}) => {
    return db.topic.findUnique({where: {id: root?.id}}).SubredditsOnTopic()
  },
}
