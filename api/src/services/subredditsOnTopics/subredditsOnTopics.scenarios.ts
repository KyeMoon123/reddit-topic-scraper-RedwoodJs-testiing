import type { Prisma, SubredditsOnTopic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubredditsOnTopicCreateArgs>({
  subredditsOnTopic: {
    one: {
      data: {
        subreddit: { create: {} },
        Topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
      },
    },
    two: {
      data: {
        subreddit: { create: {} },
        Topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  SubredditsOnTopic,
  'subredditsOnTopic'
>
