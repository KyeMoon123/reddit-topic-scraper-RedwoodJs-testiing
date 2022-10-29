import type { ComponentMeta } from '@storybook/react'

import EditTopicPage from './EditTopicPage'

export const generated = () => {
  return <EditTopicPage />
}

export default {
  title: 'Pages/EditTopicPage',
  component: EditTopicPage,
} as ComponentMeta<typeof EditTopicPage>
