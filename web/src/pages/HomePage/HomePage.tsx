import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { userMetadata, isAuthenticated, logIn, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="font bold navbar bg-neutral text-white">
        <a className="btn btn-ghost text-xl normal-case">daisyUI</a>
        <button style={{ textTransform: 'none' }} onClick={logIn}>
          Login
        </button>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
