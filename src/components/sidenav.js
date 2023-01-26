import React, { useState } from 'react'

const SideNav = (props) => {
  const navigation = props.navigation

  return (
    <aside className={`navbar ${navigation ? "fixed md:static h-screen" : "hidden"} z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block mt-16 md:mt-0 flex-shrink-0 py-5 px-4 transition-transform ease-in duration-200`}>
      <a className="text-lg text-gray-800 dark:text-gray-200" href="#">
        Blocktimestamp Docs
      </a>

      <ul className="nav flex flex-col overflow-hidden mt-2">
        <li className="nav-item">
          <a href="#" className="flex flex-row items-center h-11 focus:outline-none text-gray-500 dark:text-white border-transparent pr-6">
            <span className="inline-flex justify-center items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </span>
            <span className="ml-3 text-sm tracking-wide truncate transform text-dark">Introduction</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="flex flex-row items-center h-11 focus:outline-none text-gray-500 dark:text-white border-transparent pr-6">
            <span className="inline-flex justify-center items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            </span>
            <span className="ml-3 text-sm tracking-wide truncate transform text-dark">API Reference</span>
          </a>
        </li>
        <li className="nav-item">
          <div className="flex flex-row items-center h-6">
            <div className="text-sm font-light tracking-wide text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<hr /></div>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="flex flex-row items-center h-11 focus:outline-none text-gray-500 dark:text-white border-transparent pr-6">
            <span className="inline-flex justify-center items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </span>
            <span className="ml-3 text-sm tracking-wide truncate transform text-dark">Changelog</span>
          </a>
        </li>

      </ul>
    </aside>
  )
};

export default SideNav;
