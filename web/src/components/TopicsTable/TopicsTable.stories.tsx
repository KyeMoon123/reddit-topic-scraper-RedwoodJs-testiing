// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TopicsTable> = (args) => {
//   return <TopicsTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TopicsTable from './TopicsTable'

export const generated = () => {
  return <TopicsTable />
}

export default {
  title: 'Components/TopicsTable',
  component: TopicsTable,
} as ComponentMeta<typeof TopicsTable>
