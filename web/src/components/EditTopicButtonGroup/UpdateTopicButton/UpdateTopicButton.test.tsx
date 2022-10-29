import { render } from '@redwoodjs/testing/web'

import UpdateTopicButton from './UpdateTopicButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateTopicButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateTopicButton />)
    }).not.toThrow()
  })
})
