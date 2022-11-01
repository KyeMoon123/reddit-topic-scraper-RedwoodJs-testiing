import { render } from '@redwoodjs/testing/web'

import EditTopicPage from './EditTopicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditTopicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTopicPage />)
    }).not.toThrow()
  })
})
