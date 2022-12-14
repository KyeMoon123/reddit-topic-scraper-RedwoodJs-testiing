import * as React from 'react'

import { MetaTags } from '@redwoodjs/web'
import {Link, routes} from "@redwoodjs/router";
import TopicsTable from "src/components/TopicsTable/TopicsTable";

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <div className="">
        <h1 className=" p-6 text-4xl font-extrabold">Your Topics</h1>
        <h1 className=" px-6 text-xl">Manage your topics</h1>
        <div className={'flex justify-end'}>
          <Link to={routes.newTopic()}>
            <button className="btn btn-primary flex justify-center py-2">
              Create a new topic
            </button>
          </Link>
        </div>
        <div className="divider"></div>
        <TopicsTable/>
      </div>
    </>
  )
}

export default DashboardPage
