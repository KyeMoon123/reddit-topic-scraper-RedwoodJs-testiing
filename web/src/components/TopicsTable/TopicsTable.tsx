import {Link, routes} from "@redwoodjs/router";
import {useMutation} from "@apollo/client";
import {DELETE_TOPIC} from "src/utils/Mutations/TopicMutations";
import {useTopicsContext} from "../../../providers/context/TopicsContext";
import {TableSkeleton} from "src/components/TableSkeleton/TableSkeleton";

const TopicsTable = () => {
  const [deleteTopic] = useMutation<{ id: number }>(DELETE_TOPIC)
  const context = useTopicsContext()
  const {topics, loading} = context

  const handleDeleteTopic = (id) => {
    deleteTopic({variables: {id: id}}).then(() => context.onChange())
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra ">
        <thead>
        <tr className={'text-white'}>
          <th className={'bg-neutral'}>Name</th>
          <th className={'bg-neutral'}>Description</th>
          <th className={'bg-neutral'}>Subreddits</th>
          <th className={'flex justify-end bg-neutral'}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {loading ? (
          <>
            <TableSkeleton numberOfColumns={4} numberOfRows={3}/>
          </>
        ) : (
          topics?.length > 0 ? (
            <>
              {topics.map((topic) => {
                  return (
                    <tr key={topic.id}>
                      <td className="font-semibold text-primary">
                        <Link key={topic.id} to={routes.topic({id: topic.id})}>
                          {topic.name}
                        </Link>
                      </td>
                      <td>{topic.description}</td>
                      <td>
                        <div className="flex space-x-1 ">
                          {topic.SubredditsOnTopic.map((sub) => {
                            return (
                              <span
                                key={sub}
                                className="badge badge-primary rounded-md "
                              >
                            {sub.subreddit.channel_name}
                           </span>)
                          })}
                        </div>
                      </td>
                      <td className={'flex justify-end'}>
                        <button onClick={() => {
                          handleDeleteTopic(topic.id)
                        }}>Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </>
          ) : (<></>)
        )}
        </tbody>
      </table>
    </div>
  )
}

export default TopicsTable

