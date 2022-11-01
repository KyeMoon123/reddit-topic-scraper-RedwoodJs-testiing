import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import EditTopicCell from '../../components/EditTopicCell/EditTopicCell'
interface Props {
  id: string
}
const EditTopicPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="EditTopic" description="EditTopic page" />
      <EditTopicCell id={parseInt(id)} />
    </>
  )
}

export default EditTopicPage
