import {NavLink, routes} from "@redwoodjs/router";
import {useTopicsContext} from "../../../providers/context/TopicsContext";
import {TableSkeleton} from "src/components/TableSkeleton/TableSkeleton";

const TopicList = () => {
  const context = useTopicsContext()
  const {topics, loading} = context

  return (
    <div>
      <div className="flex px-4 py-4 text-white ">
        <h2>Topics</h2>
      </div>

      { loading ? (
          <TableSkeleton numberOfColumns={1} numberOfRows={1}/>
      ) : (
        topics?.length > 0 ? (
          <>
            {topics?.map((topic) => {
              return (
                <NavLink
                  key={topic.id}
                  className="flex p-4 font-semibold text-neutral hover:bg-neutral hover:bg-opacity-10 "
                  activeClassName="bg-neutral bg-opacity-10"
                  to={routes.topic({id: topic.id})}
                >
                  {topic.name}
                </NavLink>
              )
            })}
          </>
        ) : (<> <h3 className={'pl-4'}>create a topic to get started...</h3> </>)
      )}


    </div>
  )
}

export default TopicList
