import DeleteTopicButton from './DeleteTopicButton/DeleteTopicButton'
import UpdateTopicButton from './UpdateTopicButton/UpdateTopicButton'
const EditTopicButtonGroup = ({ topicId }) => {
  return (
    <div className="flex space-x-4">
      <UpdateTopicButton topicId={topicId} />
      <DeleteTopicButton topicId={topicId} />
    </div>
  )
}

export default EditTopicButtonGroup
