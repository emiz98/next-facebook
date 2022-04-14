import StoryCard from './StoryCard'
import blaver from 'blaver'
import { useEffect, useState } from 'react'

const Stories = () => {
  const [posts, setPosts] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const posts = [...Array(5)].map((_, i) => ({
      ...blaver.helpers.contextualCard(),
      id: i,
    }))
    const accounts = [...Array(5)].map((_, i) => ({
      ...blaver.helpers.contextualCard(),
      id: i,
    }))
    setPosts(posts)
    setAccounts(accounts)
  }, [])

  return (
    <div
      className="flex items-center gap-x-3
    overflow-x-auto scrollbar-hide"
    >
      {posts.map(({ avatar }, index) => (
        <StoryCard
          key={index}
          name={accounts[index].name}
          src={avatar}
          profile={accounts[index].avatar}
        />
      ))}
    </div>
  )
}

export default Stories
