/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const links = <>
  <li><NavLink to='/' className={({isActive}) => isActive? 'border border-white bg-blue-50 p-2' : ''}>Home</NavLink></li>
  <li><NavLink to='/project' className={({isActive}) => isActive? 'border border-white p-2' : ''}>Projects</NavLink></li>
  <li><NavLink to='/skills' className={({isActive}) => isActive? 'border border-white p-2' : ''}>Skills</NavLink></li>
  </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Hi, I'm Tinny!</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
    <div className="w-12 rounded-full">
      <img src="/profile.jpg" />
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;