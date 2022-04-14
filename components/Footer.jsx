import React from 'react'

const Footer = () => {
  return (
    <div
      className="footer flex flex-col
    bg-white text-sm font-light text-gray-600 shadow-md"
    >
      <div className="mx-auto space-y-4 p-5 md:p-10 lg:max-w-screen-lg">
        <div className="gap-x-2 border-b border-gray-300 pb-2">
          <span>English</span>
          <span>සිංහල</span>
          <span>தமிழ்</span>
          <span>Deutsch</span>
          <span>Italiano</span>
          <span>Français (France)</span>
          <span>Português (Brasil)</span>
          <span>日本語</span>
          <span>العربية</span>
          <span>हिन्दी</span>
        </div>
        <div className="hidden md:inline-block">
          <span>Sign Up</span>
          <span>Log In</span>
          <span>Messenger</span>
          <span>Games</span>
          <span>Marketplace</span>
          <span>Facebook Pay</span>
          <span>Oculus</span>
          <span>About</span>
          <span>Developers</span>
          <span>Careers</span>
        </div>
        <div>Meta © 2022</div>
        <div className="flex justify-center">
          This is not a real app, It is built only for educational purposes
          only.
        </div>
      </div>
    </div>
  )
}

export default Footer
