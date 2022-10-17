import type { ComponentMeta } from '@storybook/react'

import TopicPage from './TopicPage'

export const generated = () => {
  return <TopicPage />
}

export default {
  title: 'Pages/TopicPage',
  component: TopicPage,
} as ComponentMeta<typeof TopicPage>
