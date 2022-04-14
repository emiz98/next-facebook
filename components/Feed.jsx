import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-3xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  )
}

export default Feed
