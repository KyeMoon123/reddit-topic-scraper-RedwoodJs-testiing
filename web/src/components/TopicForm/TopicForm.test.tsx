import { render } from '@redwoodjs/testing/web'

import TopicForm from './TopicForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopicForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopicForm />)
    }).not.toThrow()
  })
})
