import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NewTopicDialogeCell from '../../components/NewTopicDialogCell/NewTopicDialogCell'

const NewTopicPage = () => {
  return (
    <>
      <MetaTags title="NewTopic" description="NewTopic page" />

      <NewTopicDialogeCell />
    </>
  )
}

export default NewTopicPage
