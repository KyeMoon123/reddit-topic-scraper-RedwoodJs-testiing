import type { RedditMessages } from '@prisma/client'

import {
  redditMessagess,
  redditMessages,
  createRedditMessages,
  updateRedditMessages,
  deleteRedditMessages,
} from './redditMessagess'
import type { StandardScenario } from './redditMessagess.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('redditMessagess', () => {
  scenario(
    'returns all redditMessagess',
    async (scenario: StandardScenario) => {
      const result = await redditMessagess()

      expect(result.length).toEqual(Object.keys(scenario.redditMessages).length)
    }
  )

  scenario(
    'returns a single redditMessages',
    async (scenario: StandardScenario) => {
      const result = await redditMessages({
        id: scenario.redditMessages.one.id,
      })

      expect(result).toEqual(scenario.redditMessages.one)
    }
  )

  scenario('deletes a redditMessages', async (scenario: StandardScenario) => {
    const original = (await deleteRedditMessages({
      id: scenario.redditMessages.one.id,
    })) as RedditMessages
    const result = await redditMessages({ id: original.id })

    expect(result).toEqual(null)
  })
})
