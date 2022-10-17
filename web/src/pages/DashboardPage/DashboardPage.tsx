import * as React from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import TopicsAccordionCell from '../../components/TopicsAccordionCell/TopicsAccordionCell'

const DashboardPage = () => {
  const { userMetadata } = useAuth()

  console.log(userMetadata)
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className="">
        <h1 className=" text-red p-6 text-4xl font-extrabold">Your Topics</h1>
        <TopicsAccordionCell userId={userMetadata.sub} />
      </div>
    </>
  )
}

export default DashboardPage
