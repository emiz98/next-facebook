import blaver from 'blaver'
import Contact from './Contact'
import { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'

const Widgets = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const profiles = [...Array(5)].map((_, i) => ({
      ...blaver.helpers.contextualCard(),
      id: i,
    }))
    setProfiles(profiles)
  }, [])

  return (
    <div className="mt-5 mr-10 hidden w-60 flex-col space-y-4 p-2 lg:flex">
      <div className="flex items-center justify-between text-gray-500">
        <h2 className="text-lg font-medium">Contacts</h2>
        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {profiles.map(({ avatar, name }, index) => (
        <Contact key={index} src={avatar} name={name} />
      ))}
    </div>
  )
}

export default Widgets
