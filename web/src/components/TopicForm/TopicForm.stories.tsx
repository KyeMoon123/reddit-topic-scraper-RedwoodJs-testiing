// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TopicForm> = (args) => {
//   return <TopicForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TopicForm from './TopicForm'

export const generated = () => {
  return <TopicForm />
}

export default {
  title: 'Components/TopicForm',
  component: TopicForm,
} as ComponentMeta<typeof TopicForm>
