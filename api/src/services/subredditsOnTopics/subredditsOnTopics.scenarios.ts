import type { Prisma, SubredditsOnTopic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubredditsOnTopicCreateArgs>({
  subredditsOnTopic: {
    one: {
      data: {
        topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
        subreddit: { create: { channel_name: 'String3021431' } },
      },
    },
    two: {
      data: {
        topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
        subreddit: { create: { channel_name: 'String4353029' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  SubredditsOnTopic,
  'subredditsOnTopic'
>
