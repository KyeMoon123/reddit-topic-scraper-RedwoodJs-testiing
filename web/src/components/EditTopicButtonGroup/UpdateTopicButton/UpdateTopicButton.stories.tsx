// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UpdateTopicButton> = (args) => {
//   return <UpdateTopicButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UpdateTopicButton from './UpdateTopicButton'

export const generated = () => {
  return <UpdateTopicButton />
}

export default {
  title: 'Components/UpdateTopicButton',
  component: UpdateTopicButton,
} as ComponentMeta<typeof UpdateTopicButton>
