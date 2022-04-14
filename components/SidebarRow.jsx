import Image from 'next/image'
import React from 'react'

const SidebarRow = ({ Icon, src, title }) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-2 rounded-md
    p-4 hover:bg-gray-200"
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
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <span className="hidden font-medium sm:inline-flex">{title}</span>
    </div>
  )
}

export default SidebarRow
