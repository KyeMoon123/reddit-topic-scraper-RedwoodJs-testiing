import { render } from '@redwoodjs/testing/web'

import MessagesTable from './MessagesTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessagesTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagesTable />)
    }).not.toThrow()
  })
})
