import type { Prisma, Subreddit } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubredditCreateArgs>({
  subreddit: {
    one: { data: { channel_name: 'String8298826' } },
    two: { data: { channel_name: 'String9690236' } },
  },
})

export type StandardScenario = ScenarioData<Subreddit, 'subreddit'>
