import React from 'react'

const Welcome = ({ setIsDemo }) => {
  return (
    <div className="flex h-[80vh] w-full justify-center bg-hero bg-cover bg-bottom">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="flex w-full p-10 text-center text-3xl 
      font-bold text-blue-500 sm:text-5xl lg:w-2/3"
        >
          Connect with friends and the world around you
        </h1>
        <button
          onClick={() => setIsDemo(true)}
          className="rounded-full bg-blue-500 py-4 px-8 font-medium 
        text-white transition ease-out hover:bg-blue-600"
        >
          Demo Mode
        </button>
      </div>
    </div>
  )
}

export default Welcome
