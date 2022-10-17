import type { RecommendedOnTopic } from '@prisma/client'

import {
  recommendedOnTopics,
  recommendedOnTopic,
  createRecommendedOnTopic,
  updateRecommendedOnTopic,
  deleteRecommendedOnTopic,
} from './recommendedOnTopics'
import type { StandardScenario } from './recommendedOnTopics.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recommendedOnTopics', () => {
  scenario(
    'returns all recommendedOnTopics',
    async (scenario: StandardScenario) => {
      const result = await recommendedOnTopics()

      expect(result.length).toEqual(
        Object.keys(scenario.recommendedOnTopic).length
      )
    }
  )

  scenario(
    'returns a single recommendedOnTopic',
    async (scenario: StandardScenario) => {
      const result = await recommendedOnTopic({
        id: scenario.recommendedOnTopic.one.id,
      })

      expect(result).toEqual(scenario.recommendedOnTopic.one)
    }
  )

  scenario(
    'creates a recommendedOnTopic',
    async (scenario: StandardScenario) => {
      const result = await createRecommendedOnTopic({
        input: {
          topicId: scenario.recommendedOnTopic.two.topicId,
          recommendedId: scenario.recommendedOnTopic.two.recommendedId,
        },
      })

      expect(result.topicId).toEqual(scenario.recommendedOnTopic.two.topicId)
      expect(result.recommendedId).toEqual(
        scenario.recommendedOnTopic.two.recommendedId
      )
    }
  )

  scenario(
    'updates a recommendedOnTopic',
    async (scenario: StandardScenario) => {
      const original = (await recommendedOnTopic({
        id: scenario.recommendedOnTopic.one.id,
      })) as RecommendedOnTopic
      const result = await updateRecommendedOnTopic({
        id: original.id,
        input: { recommendedId: scenario.recommendedOnTopic.two.topicId },
      })

      expect(result.recommendedId).toEqual(
        scenario.recommendedOnTopic.two.topicId
      )
    }
  )

  scenario(
    'deletes a recommendedOnTopic',
    async (scenario: StandardScenario) => {
      const original = (await deleteRecommendedOnTopic({
        id: scenario.recommendedOnTopic.one.id,
      })) as RecommendedOnTopic
      const result = await recommendedOnTopic({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
