import type { Prisma, Recommended } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendedCreateArgs>({
  recommended: {
    one: {
      data: {
        channelId: 'String',
        channelName: 'String',
        title: 'String',
        content: 'String',
        url: 'String',
        score: 6206483,
      },
    },
    two: {
      data: {
        channelId: 'String',
        channelName: 'String',
        title: 'String',
        content: 'String',
        url: 'String',
        score: 7408099,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recommended, 'recommended'>
