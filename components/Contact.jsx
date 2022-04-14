import React from 'react'

const Contact = ({ src, name }) => {
  return (
    <div
      className="relative mb-2 flex cursor-pointer items-center
    space-x-3 rounded-xl p-2 hover:bg-gray-200"
    >
      <img
        className="h-14 w-14 rounded-full"
        loading="lazy"
        src={src}
        alt="contact"
      />
      <span
        className="absolute bottom-2 left-9 h-3 w-3 rounded-full
      border border-white bg-green-400"
      ></span>
      <span className="font-medium">{name}</span>
    </div>
  )
}

export default Contact
