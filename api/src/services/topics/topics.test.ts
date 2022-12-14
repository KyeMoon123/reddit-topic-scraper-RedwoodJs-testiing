import type { Topic } from '@prisma/client'

import { topics, topic, createTopic, updateTopic, deleteTopic } from './topics'
import type { StandardScenario } from './topics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('topics', () => {
  scenario('returns all topics', async (scenario: StandardScenario) => {
    const result = await topics()

    expect(result.length).toEqual(Object.keys(scenario.topic).length)
  })

  scenario('returns a single topic', async (scenario: StandardScenario) => {
    const result = await topic({ id: scenario.topic.one.id })

    expect(result).toEqual(scenario.topic.one)
  })

  scenario('creates a topic', async () => {
    const result = await createTopic({
      input: { name: 'String', description: 'String', userId: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.userId).toEqual('String')
  })

  scenario('updates a topic', async (scenario: StandardScenario) => {
    const original = (await topic({ id: scenario.topic.one.id })) as Topic
    const result = await updateTopic({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a topic', async (scenario: StandardScenario) => {
    const original = (await deleteTopic({ id: scenario.topic.one.id })) as Topic
    const result = await topic({ id: original.id })

    expect(result).toEqual(null)
  })
})
