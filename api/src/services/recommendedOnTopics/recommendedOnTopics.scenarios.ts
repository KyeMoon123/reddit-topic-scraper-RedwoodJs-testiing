import type { Prisma, RecommendedOnTopic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendedOnTopicCreateArgs>({
  recommendedOnTopic: {
    one: {
      data: {
        recommended: {
          create: {
            channelId: 'String',
            title: 'String',
            url: 'String',
            score: 5473677,
          },
        },
        topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
      },
    },
    two: {
      data: {
        recommended: {
          create: {
            channelId: 'String',
            title: 'String',
            url: 'String',
            score: 6867894,
          },
        },
        topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  RecommendedOnTopic,
  'recommendedOnTopic'
>
