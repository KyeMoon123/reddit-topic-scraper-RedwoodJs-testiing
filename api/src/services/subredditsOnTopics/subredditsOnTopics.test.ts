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
          topicId: scenario.subredditsOnTopic.two.topicId,
          subredditId: scenario.subredditsOnTopic.two.subredditId,
        },
      })

      expect(result.topicId).toEqual(scenario.subredditsOnTopic.two.topicId)
      expect(result.subredditId).toEqual(
        scenario.subredditsOnTopic.two.subredditId
      )
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
        input: { topicId: scenario.subredditsOnTopic.two.topicId },
      })

      expect(result.topicId).toEqual(scenario.subredditsOnTopic.two.topicId)
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
