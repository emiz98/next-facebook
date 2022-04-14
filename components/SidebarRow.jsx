import Image from 'next/image'
import React from 'react'

const SidebarRow = ({ Icon, src, title }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-x-2 rounded-md p-4
    hover:bg-gray-200 sm:justify-start"
    >
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-6 w-6 text-blue-500 md:h-8 md:w-8" />}
      <span className="hidden font-medium sm:inline-flex">{title}</span>
    </div>
  )
}

export default SidebarRow
