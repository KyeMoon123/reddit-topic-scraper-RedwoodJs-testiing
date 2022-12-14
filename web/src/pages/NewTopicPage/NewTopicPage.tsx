import { MetaTags } from '@redwoodjs/web'

// @ts-ignore
import NewTopicCell from "../../components/NewTopicCell/NewTopicCell"
const NewTopicPage = () => {
  return (
    <>
      <MetaTags title="NewTopic" description="NewTopic page" />
      <NewTopicCell />
    </>
  )
}

export default NewTopicPage


