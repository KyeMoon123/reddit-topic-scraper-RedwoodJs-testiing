import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TopicCell from '../../components/TopicCell'

interface Props {
  id: string
}
const TopicPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Topic" description="Topic page" />
      <div className="">
        <TopicCell id={parseInt(id)} />
      </div>
    </>
  )
}

export default TopicPage
