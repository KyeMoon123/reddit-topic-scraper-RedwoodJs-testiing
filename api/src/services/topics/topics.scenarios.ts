import type { Prisma, Topic } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TopicCreateArgs>({
  topic: {
    one: { data: { name: 'String', description: 'String', userId: 'String' } },
    two: { data: { name: 'String', description: 'String', userId: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Topic, 'topic'>
