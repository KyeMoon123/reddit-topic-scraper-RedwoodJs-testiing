import type { Prisma, Subreddit } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SubredditCreateArgs>({
  subreddit: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<Subreddit, 'subreddit'>
