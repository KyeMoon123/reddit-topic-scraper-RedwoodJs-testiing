import type { ComponentMeta } from '@storybook/react'

import NewTopicPage from './NewTopicPage'

export const generated = () => {
  return <NewTopicPage />
}

export default {
  title: 'Pages/NewTopicPage',
  component: NewTopicPage,
} as ComponentMeta<typeof NewTopicPage>
