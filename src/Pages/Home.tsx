import React from 'react'

const Home = () => {
  return (
    <>
      <main className="App-header">
        <p className='text-7xl'>
          This is a <span className='text-[#61dafb]'>boilerplate</span> for module federation
        </p>
        <a
          className="App-link mt-5 hover:underline"
          href="https://webpack.js.org/concepts/module-federation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Module Federation
        </a>
      </main>
    </>
  )
}

export default Home