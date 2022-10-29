// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DeleteTopicButton> = (args) => {
//   return <DeleteTopicButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DeleteTopicButton from './DeleteTopicButton'

export const generated = () => {
  return <DeleteTopicButton />
}

export default {
  title: 'Components/DeleteTopicButton',
  component: DeleteTopicButton,
} as ComponentMeta<typeof DeleteTopicButton>
