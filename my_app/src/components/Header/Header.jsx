import React from 'react'

import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="bg-slate-700 w-full h-32">
      <nav className="container bg-slate-700 flex items-center h-full  justify-between">
        <a
          className="flex items-center gap-1 font-semibold text-xl text-white"
          href="/"
        >
          <img src={logo} alt="site-logo" />
          Agency
        </a>

        <ul className="flex gap-5">
          <li>
            <a className="text-white" href="/">
              About
            </a>
          </li>
          <li>
            <a className="text-white" href="/">
              Services
            </a>
          </li>
          <li>
            <a className="text-white" href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className="text-white" href="/">
              Blog
            </a>
          </li>
        </ul>
        <a className="text-white p-4 border" href="/">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header