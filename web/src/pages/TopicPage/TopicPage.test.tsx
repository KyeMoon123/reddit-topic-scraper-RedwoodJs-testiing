import { render } from '@redwoodjs/testing/web'

import TopicPage from './TopicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicPage />)
    }).not.toThrow()
  })
})
