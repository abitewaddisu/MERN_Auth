import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <NavLink to={'/'}>
            <h1 className="font-bold ">MERN Auth</h1>
        </NavLink>
        <ul className="flex gap-4">
          <NavLink to={'about'}>
            <li>About</li>
          </NavLink>
          <NavLink to={'/sign-in'}>
          <li>Sign In</li>
          </NavLink>
          <NavLink to={'/sign-up'}>
            <li>Register</li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header
