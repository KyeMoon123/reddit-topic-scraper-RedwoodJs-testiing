// web/src/providers/context/index.js
import { TopicsContextProvider } from './TopicsContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <TopicsContextProvider>{children}</TopicsContextProvider>
}

export default AllContextProviders
