import { render } from '@redwoodjs/testing/web'

import DeleteTopicButton from './DeleteTopicButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeleteTopicButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteTopicButton />)
    }).not.toThrow()
  })
})
