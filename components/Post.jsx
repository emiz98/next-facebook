import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import Moment from 'react-moment'

const Post = ({ id, username, profileImg, message, postImg, timestamp }) => {
  return (
    <div className="mt-5 flex flex-col rounded-2xl bg-white shadow-md">
      <div className="p-5">
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={profileImg}
            alt="profileImg"
          />
          <div className="flex flex-col">
            <span className="font-medium">{username}</span>
            {/* <span className="text-xs text-gray-500">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </span> */}
            <Moment className="pr-5 text-xs" fromNow>
              {timestamp?.toDate()}
            </Moment>
          </div>
        </div>
        <p className="mt-5">{message}</p>
      </div>

      {postImg && (
        <img className="w-full object-contain" loading="lazy" src={postImg} />
      )}

      <div className="flex select-none items-center justify-between border-t text-gray-400">
        <div className="inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </div>
        <div className="inputIcon">
          <ChatAltIcon className="h-5 w-5" />
          <span>Comment</span>
        </div>
        <div className="inputIcon rounded-br-2xl">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </div>
      </div>
    </div>
  )
}

export default Post
