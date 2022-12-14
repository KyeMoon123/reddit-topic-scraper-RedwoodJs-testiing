import DeleteTopicButton from './DeleteTopicButton/DeleteTopicButton'
import UpdateTopicButton from './UpdateTopicButton/UpdateTopicButton'
export interface EditTopicButtonGroupProps{
  topicId: number
}
const EditTopicButtonGroup = ({ topicId }: EditTopicButtonGroupProps) => {
  return (
    <div className="flex space-x-4">
      <UpdateTopicButton topicId={topicId} />
      <DeleteTopicButton topicId={topicId} />
    </div>
  )
}

export default EditTopicButtonGroup
