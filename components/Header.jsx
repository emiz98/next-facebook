import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'

const Header = ({ isDemo }) => {
  const { data: session } = useSession()
  return (
    <div
      className="sticky top-0 z-50 flex select-none items-center 
    justify-between bg-white p-3 shadow-md lg:p-5"
    >
      <div className="flex items-center">
        <Image src={'/favicon.ico'} width={40} height={40} layout="fixed" />
        {(session || isDemo) && (
          <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className="ml-2 hidden flex-shrink bg-transparent outline-none md:flex"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        )}
      </div>

      {(session || isDemo) && (
        <div className="hidden flex-grow items-center justify-center space-x-6 md:flex md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      )}

      <div className="flex items-center justify-end sm:space-x-2">
        {session ? (
          <>
            <Image
              onClick={signOut}
              src={session.user.image}
              width={40}
              height={40}
              layout="fixed"
              className="cursor-pointer rounded-full"
            />
            <h4 className="hidden whitespace-nowrap pr-3 font-semibold md:inline-flex">
              {session.user.name}
            </h4>
          </>
        ) : (
          <span
            onClick={signIn}
            className="cursor-pointer rounded-md bg-blue-500 px-4 
            py-2 font-medium text-white transition ease-out hover:bg-blue-600"
          >
            Sign in
          </span>
        )}

        {session && (
          <>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
          </>
        )}
      </div>
    </div>
  )
}

export default Header
