import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

const Feed = ({ isDemo }) => {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-20 pt-6 scrollbar-hide md:mr-0 md:pb-28">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-3xl">
        <Stories />
        {!isDemo && <InputBox />}

        <Posts />
      </div>
    </div>
  )
}

export default Feed
