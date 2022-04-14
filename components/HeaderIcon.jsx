import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className="group flex cursor-pointer items-center
    rounded-xl transition-all duration-200 ease-out hover:bg-gray-100 active:border-b-2
    active:border-blue-500 md:h-14 md:px-3 lg:px-10 "
    >
      <Icon
        className={`mx-auto h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 ${
          active && '!text-blue-500'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
