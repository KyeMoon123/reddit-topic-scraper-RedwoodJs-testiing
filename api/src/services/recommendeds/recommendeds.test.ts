import type { Recommended } from '@prisma/client'

import {
  recommendeds,
  recommended,
  createRecommended,
  updateRecommended,
  deleteRecommended,
} from './recommendeds'
import type { StandardScenario } from './recommendeds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recommendeds', () => {
  scenario('returns all recommendeds', async (scenario: StandardScenario) => {
    const result = await recommendeds()

    expect(result.length).toEqual(Object.keys(scenario.recommended).length)
  })

  scenario(
    'returns a single recommended',
    async (scenario: StandardScenario) => {
      const result = await recommended({ id: scenario.recommended.one.id })

      expect(result).toEqual(scenario.recommended.one)
    }
  )

  scenario('creates a recommended', async () => {
    const result = await createRecommended({
      input: {
        channelId: 'String',
        channelName: 'String',
        title: 'String',
        content: 'String',
        url: 'String',
        score: 4764202,
      },
    })

    expect(result.channelId).toEqual('String')
    expect(result.channelName).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.score).toEqual(4764202)
  })

  scenario('updates a recommended', async (scenario: StandardScenario) => {
    const original = (await recommended({
      id: scenario.recommended.one.id,
    })) as Recommended
    const result = await updateRecommended({
      id: original.id,
      input: { channelId: 'String2' },
    })

    expect(result.channelId).toEqual('String2')
  })

  scenario('deletes a recommended', async (scenario: StandardScenario) => {
    const original = (await deleteRecommended({
      id: scenario.recommended.one.id,
    })) as Recommended
    const result = await recommended({ id: original.id })

    expect(result).toEqual(null)
  })
})
