import type { Subreddit } from '@prisma/client'

import {
  subreddits,
  subreddit,
  deleteSubreddit,
} from './subreddits'
import type { StandardScenario } from './subreddits.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subreddits', () => {
  scenario('returns all subreddits', async (scenario: StandardScenario) => {
    const result = await subreddits()

    expect(result.length).toEqual(Object.keys(scenario.subreddit).length)
  })

  scenario('returns a single subreddit', async (scenario: StandardScenario) => {
    const result = await subreddit({ id: scenario.subreddit.one.id })

    expect(result).toEqual(scenario.subreddit.one)
  })

  scenario('deletes a subreddit', async (scenario: StandardScenario) => {
    const original = (await deleteSubreddit({
      id: scenario.subreddit.one.id,
    })) as Subreddit
    const result = await subreddit({ id: original.id })

    expect(result).toEqual(null)
  })
})
