import type { Subreddit } from '@prisma/client'

import {
  subreddits,
  subreddit,
  createSubreddit,
  updateSubreddit,
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

  scenario('creates a subreddit', async () => {
    const result = await createSubreddit({
      input: { channel_name: 'String1765569' },
    })

    expect(result.channel_name).toEqual('String1765569')
  })

  scenario('updates a subreddit', async (scenario: StandardScenario) => {
    const original = (await subreddit({
      id: scenario.subreddit.one.id,
    })) as Subreddit
    const result = await updateSubreddit({
      id: original.id,
      input: { channel_name: 'String3312702' },
    })

    expect(result.channel_name).toEqual('String3312702')
  })

  scenario('deletes a subreddit', async (scenario: StandardScenario) => {
    const original = (await deleteSubreddit({
      id: scenario.subreddit.one.id,
    })) as Subreddit
    const result = await subreddit({ id: original.id })

    expect(result).toEqual(null)
  })
})
