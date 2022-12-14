import { render } from '@redwoodjs/testing/web'

import TopicsTable from './TopicsTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopicsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicsTable />)
    }).not.toThrow()
  })
})
