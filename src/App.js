import React, { useRef, useState } from 'react'
import Header from './components/header'
import SideNav from './components/sidenav'

function App() {
  const [navigation, setNavigation] = useState(false)
  const toggleSideMenu = async (e) => {
    setNavigation(!navigation)
  }

  const [theme, setTheme] = useState('light')
  function toggleTheme() {
    const html = document.querySelector('html')

    theme === 'light' ? html.classList.add('dark') : html.classList.remove('dark')
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <SideNav navigation={navigation} />

      <div className="flex flex-col flex-1 w-full">
        <Header onClick={toggleSideMenu} toggleTheme={toggleTheme} theme={theme} />

        <main className={`h-full px-4 md:px-10 md:py-4 overflow-y-auto bg-background dark:bg-inherit`}>
          <div className="container px-2 md:px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Introduction
            </h2>

            <div className="w-full">
              <div className="shadow-xs col-start-1 col-end-7 py-4">
                <h4 className="mb-4 font-semibold">
                  Welcome to the API documentation for the Blocktimestamp service.
                </h4>
                <p className="py-4">
                  This REST-ful api provides two endpoints, one for retrieving block number and another for retrieving timestamp data. 
                  It is designed to be simple to use and enables developers to seamlessly integrate blockchain data into their applications
                  Here you will find all the information you need to use the API, including examples of how to make requests and interpret responses.
                </p>
                <p>
                  <div className="text-sm px-5 py-4 mb-4 overflow-hidden rounded border border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10">
                    <pre className="language-bash">
                      <code className="language-bash">
                        <span className="token function">curl</span> <span className="token parameter variable">-ks</span> https://prod.blocktimestamp.workers.dev/blocks/1
                        <br />
                        <span className="token function">>>></span> 
                        <br />
                        <span className="token parameter variable">{`{"number":"1","timestamp":1438269988}`}</span>
                      </code>
                    </pre>
                  </div>
                </p>
              </div>
            </div>

            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              API Reference
            </h2>

            <div className="grid gap-0 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  Blocks
                </h4>

                <label className="block text-sm mt-4">
                  <div className="py-4">It takes a block number as a parameter, and returns the timestamps for that block</div>
                  <div className="text-xs">@param block - the block number you want to get the timestamps for</div>
                  <div className="text-xs">@returns - the block and timestamp for the block in a json object.</div>
                </label>
                <p id="hextonumber" className="my-4 pt-4 dark:text-white"></p>
              </div>
              <div className="min-w-0 p-4 bg-gray-300 border border-gray-300 dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold">
                  Blocks
                </h4>
                <p>
                  <div className="text-sm px-5 py-4 mb-4 overflow-hidden rounded border border-sky-500/20 bg-sky-50/50 text-gray-700 dark:text-gray-400 dark:border-sky-500/30 dark:bg-sky-500/10">
                    <pre className="language-bash">
                      <code className="language-bash">
                        <span className="token function">curl</span> <span className="token parameter variable">-ks</span> https://prod.blocktimestamp.workers.dev/ethereum/blocks/1
                        <br />
                        <span className="token function">>>></span> 
                        <br />
                        <span className="token parameter variable">{`{"number":"1","timestamp":1438269988}`}</span>
                      </code>
                    </pre>
                  </div>
                </p>
                <p><button className="hidden bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 font-semibold text-white mt-2 rounded">Test</button></p>
              </div>
            </div>

            <div className="grid gap-0 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Timestamps
                </h4>

                <label className="block text-sm mt-4">
                  <div className="py-4">It takes a timestamp, and returns the block number for that timestamp</div>
                  <div className="text-xs">@param timestamp - The timestamp you want to get the data for.</div>
                  <div className="text-xs">@returns - timestamp and block number in a json object.</div>
                </label>
                <p id="hextonumber" className="my-4 pt-4 dark:text-white"></p>
              </div>
              <div className="min-w-0 p-4 bg-gray-300 border border-gray-300 dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold">
                  Timestamps
                </h4>
                <p>
                  <div className="text-sm px-5 py-4 mb-4 overflow-hidden rounded border border-sky-500/20 bg-sky-50/50 text-gray-700 dark:text-gray-400 dark:border-sky-500/30 dark:bg-sky-500/10">
                    <pre className="language-bash">
                      <code className="language-bash">
                        <span className="token function">curl</span> <span className="token parameter variable">-ks</span> https://prod.blocktimestamp.workers.dev/ethereum/timestamps/1438269992
                        <br />
                        <span className="token function">>>></span> 
                        <br />
                        <span className="token parameter variable">{`{"number":"1","timestamp":1438269988}`}</span>
                      </code>
                    </pre>
                  </div>
                </p>
                <p><button className="hidden bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 font-semibold text-white mt-2 rounded">Test</button></p>
              </div>
            </div>

            <div className="grid gap-0 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Last Block
                </h4>

                <label className="block text-sm mt-4">
                  <div className="py-4">returns the last block processed in the system, it might not match up with the chain</div>
                  <div className="text-xs">@param empty</div>
                  <div className="text-xs">@returns - timestamp and block number in a json object.</div>
                </label>
                <p id="hextonumber" className="my-4 pt-4 dark:text-white"></p>
              </div>
              <div className="min-w-0 p-4 bg-gray-300 border border-gray-300 dark:border-none shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold">
                Last Block
                </h4>
                <p>
                  <div className="text-sm px-5 py-4 mb-4 overflow-hidden rounded border border-sky-500/20 bg-sky-50/50 text-gray-700 dark:text-gray-400 dark:border-sky-500/30 dark:bg-sky-500/10">
                    <pre className="language-bash">
                      <code className="language-bash">
                        <span className="token function">curl</span> <span className="token parameter variable">-ks</span> https://prod.blocktimestamp.workers.dev/ethereum/lastblock
                        <br />
                        <span className="token function">>>></span> 
                        <br />
                        <span className="token parameter variable">{`{
  "block": 17610004,
  "timestamp": 1688370707
}`}</span>
                      </code>
                    </pre>
                  </div>
                </p>
                <p><button className="hidden bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 font-semibold text-white mt-2 rounded">Test</button></p>
              </div>
            </div>

            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Changelog
            </h2>

            <div className="w-full grid gap-6 mb-8 md:grid-cols-2">
            <div className="shadow-xs col-start-1 col-end-7 py-4">
                <h4 className="mb-2 font-semibold">
                  v 0.1.0
                </h4>
                <p className="text-xs">
                  Adding namespace to 
                </p>
              </div>
              <div className="shadow-xs col-start-1 col-end-7 py-4">
                <h4 className="mb-2 font-semibold">
                  v 0.0.4
                </h4>
                <p className="text-xs">
                  Using limited json set with timestamp entries for only when blocks were produced. Improved query time.
                </p>
              </div>
              <div className="shadow-xs col-start-1 col-end-7 py-4">
                <h4 className="mb-2 font-semibold">
                  v 0.0.2
                </h4>
                <p className="text-xs">
                  Full timestamp entries for gaps between block production, the data is referencing the block number for each new timestamp until a new block is produced
                </p>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
