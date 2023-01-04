import {useAuth} from '@redwoodjs/auth'
import {Link, routes} from '@redwoodjs/router'
import Logo from '../../../public/Logo.png'
// @ts-ignore
import TopicListCell from 'src/components/TopicListCell/TopicListCell'
import TopicList from "src/components/TopicList/TopicList";

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  const {userMetadata, isAuthenticated, logIn, logOut} = useAuth()
  const [name] = userMetadata.email.toString().split("@")
  return (
    <>
      <div></div>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content bg-white ">
          <div className="navbar bg-neutral-content shadow-lg">
            <div className="navbar-start">

            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">

              </ul>
            </div>
            <div className="navbar-end">

            </div>
          </div>
          <div className={'p-8'}>{children}</div>
        </div>
        <div className=" drawer-side  bg-gray-900 font-semibold text-white">
          <div className='flex flex-col w-72'>
             <span className='flex space-x-4 pt-4 px-4  '>
              <img className='h-10 w-10 ' alt={"logo"} src={Logo}/>
               <h4 className='flex py-3'>Something </h4>
            </span>

            <ul className="menu w-72 overflow-y-auto flex grow py-6 text-base-content">
              <div className=" flex justify-center py-2ß pb-6 ">
                <Link
                  to={routes.dashboard()}
                >
                  <button className="btn btn-primary btn-wide flex py-2">
                    Dashboard
                  </button>
                </Link>
              </div>
              <TopicList />
            </ul>
            <div className={"divider"}></div>
            <h3 className={'px-5 py-2 text-sm text-white'}> Hi {name} </h3>
            <div className=' flex  justify-center py-4 mb-4'>
              <button
                style={{textTransform: 'none'}}
                onClick={isAuthenticated ? logOut : logIn}
                className="btn btn-wide"
              >
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardLayout
