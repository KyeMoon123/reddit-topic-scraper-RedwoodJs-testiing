// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TopicList> = (args) => {
//   return <TopicList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TopicList from './TopicList'

export const generated = () => {
  return <TopicList />
}

export default {
  title: 'Components/TopicList',
  component: TopicList,
} as ComponentMeta<typeof TopicList>
