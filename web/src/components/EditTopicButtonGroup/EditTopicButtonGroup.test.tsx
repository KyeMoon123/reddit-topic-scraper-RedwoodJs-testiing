import { render } from '@redwoodjs/testing/web'

import EditTopicButtonGroup from './EditTopicButtonGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditTopicButtonGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTopicButtonGroup />)
    }).not.toThrow()
  })
})
