import type { SubredditsOnTopic } from '@prisma/client'

import {
  subredditsOnTopics,
  subredditsOnTopic,
  createSubredditsOnTopic,
  updateSubredditsOnTopic,
  deleteSubredditsOnTopic,
} from './subredditsOnTopics'
import type { StandardScenario } from './subredditsOnTopics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subredditsOnTopics', () => {
  scenario(
    'returns all subredditsOnTopics',
    async (scenario: StandardScenario) => {
      const result = await subredditsOnTopics()

      expect(result.length).toEqual(
        Object.keys(scenario.subredditsOnTopic).length
      )
    }
  )

  scenario(
    'returns a single subredditsOnTopic',
    async (scenario: StandardScenario) => {
      const result = await subredditsOnTopic({
        id: scenario.subredditsOnTopic.one.id,
      })

      expect(result).toEqual(scenario.subredditsOnTopic.one)
    }
  )

  scenario(
    'creates a subredditsOnTopic',
    async (scenario: StandardScenario) => {
      const result = await createSubredditsOnTopic({
        input: {
          subreddit_id: scenario.subredditsOnTopic.two.subreddit_id,
          topic_id: scenario.subredditsOnTopic.two.topic_id,
        },
      })

      expect(result.subreddit_id).toEqual(
        scenario.subredditsOnTopic.two.subreddit_id
      )
      expect(result.topic_id).toEqual(scenario.subredditsOnTopic.two.topic_id)
    }
  )

  scenario(
    'updates a subredditsOnTopic',
    async (scenario: StandardScenario) => {
      const original = (await subredditsOnTopic({
        id: scenario.subredditsOnTopic.one.id,
      })) as SubredditsOnTopic
      const result = await updateSubredditsOnTopic({
        id: original.id,
        input: { subreddit_id: scenario.subredditsOnTopic.two.subreddit_id },
      })

      expect(result.subreddit_id).toEqual(
        scenario.subredditsOnTopic.two.subreddit_id
      )
    }
  )

  scenario(
    'deletes a subredditsOnTopic',
    async (scenario: StandardScenario) => {
      const original = (await deleteSubredditsOnTopic({
        id: scenario.subredditsOnTopic.one.id,
      })) as SubredditsOnTopic
      const result = await subredditsOnTopic({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
