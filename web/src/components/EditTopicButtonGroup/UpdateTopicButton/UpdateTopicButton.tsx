import { routes, Link } from '@redwoodjs/router'

export interface UpdateButtonProps{
  topicId: number
}
export const UpdateTopicButton = ({ topicId }:UpdateButtonProps): JSX.Element => {
  return (
    <div>
      <Link className="" to={routes.editTopic({ id: topicId })}>
        <button className="btn btn-primary rounded-md">Edit Topic</button>
      </Link>
    </div>
  )
}

export default UpdateTopicButton
