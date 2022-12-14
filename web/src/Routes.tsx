// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Private, Set } from '@redwoodjs/router'
import {TopicProvider} from "../providers/context/TopicsContext";

import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="login">
        <Set wrap={TopicProvider}>
          <Set wrap={[DashboardLayout]}>
            <Route path="/edit-topic/{id}" page={EditTopicPage} name="editTopic" />
            <Route path="/new-topic" page={NewTopicPage} name="newTopic" prerender />
            <Route path="/topic/{id}" page={TopicPage} name="topic" />
            <Route path="/dashboard" page={DashboardPage} name="dashboard" prerender />
          </Set>
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
