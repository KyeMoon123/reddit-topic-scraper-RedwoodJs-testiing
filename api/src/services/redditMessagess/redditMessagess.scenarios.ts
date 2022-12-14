import type { Prisma, RedditMessages } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RedditMessagesCreateArgs>({
  redditMessages: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = ScenarioData<RedditMessages, 'redditMessages'>
