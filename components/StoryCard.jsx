import React from 'react'

const StoryCard = ({ name, src, profile }) => {
  return (
    <div
      className="group relative h-40 w-28 flex-none cursor-pointer 
    hover:animate-pulse md:h-52 md:w-40"
    >
      <img
        className="absolute top-2 left-2 z-10 h-8 w-8 rounded-full md:h-10 
        md:w-10"
        src={profile}
        alt="profile"
      />
      <img
        className="h-full w-full rounded-2xl object-cover opacity-75 
        transition-all ease-in-out group-hover:opacity-90"
        src={src}
        alt="cover"
      />
      <h3 className="absolute bottom-3 left-3 z-10 text-sm font-bold text-white md:text-base">
        {name}
      </h3>
      <div className="absolute bottom-0 h-1/3 w-full rounded-b-2xl bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default StoryCard
