// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TableSkeleton> = (args) => {
//   return <TableSkeleton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TableSkeleton from './TableSkeleton'

export const generated = () => {
  return <TableSkeleton />
}

export default {
  title: 'Components/TableSkeleton',
  component: TableSkeleton,
} as ComponentMeta<typeof TableSkeleton>
