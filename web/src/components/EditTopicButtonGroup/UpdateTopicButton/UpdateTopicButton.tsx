import { routes, Link } from '@redwoodjs/router'

export const UpdateTopicButton = ({ topicId }): JSX.Element => {
  return (
    <div>
      {console.log(topicId)}
      <Link className="" to={routes.editTopic({ id: topicId })}>
        <button className="btn btn-primary rounded-md">Edit Topic</button>
      </Link>
    </div>
  )
}

export default UpdateTopicButton
