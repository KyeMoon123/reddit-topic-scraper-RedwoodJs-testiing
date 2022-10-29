// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EditTopicButtonGroup> = (args) => {
//   return <EditTopicButtonGroup {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EditTopicButtonGroup from './EditTopicButtonGroup'

export const generated = () => {
  return <EditTopicButtonGroup />
}

export default {
  title: 'Components/EditTopicButtonGroup',
  component: EditTopicButtonGroup,
} as ComponentMeta<typeof EditTopicButtonGroup>
