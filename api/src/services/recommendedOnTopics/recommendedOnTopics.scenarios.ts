import type { Prisma, RecommendedOnTopic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendedOnTopicCreateArgs>({
  recommendedOnTopic: {
    one: {
      data: {
        score: 1891927.9322271422,
        recommended: { create: {} },
        topic: {
          create: { name: 'String', description: 'String', userId: 'String' },
        },
      },
    },
    two: {
      data: {
        score: 405357.2959217666,
        recommended: { create: {} },
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
