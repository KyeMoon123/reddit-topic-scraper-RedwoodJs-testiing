import { render } from '@redwoodjs/testing/web'

import TopicList from './TopicList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopicList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicList />)
    }).not.toThrow()
  })
})
