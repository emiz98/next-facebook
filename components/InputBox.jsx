import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'

const InputBox = () => {
  const { data: session } = useSession()
  const [attachment, setAttachment] = useState(null)
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)

  const sendPost = async (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return

    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.name,
      email: session.user.email,
      profileImg: session.user.image,
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
    })
    if (attachment) {
      const imageRef = ref(storage, `posts/${docRef.id}/image`)
      await uploadString(imageRef, attachment, 'data_url').then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db, 'posts', docRef.id), {
            image: downloadURL,
          })
        }
      )
    }
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setAttachment(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setAttachment(null)
  }

  return (
    <div
      className="mt-6 rounded-2xl bg-white p-2 
    font-medium text-gray-500 shadow-md"
    >
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button hidden type="submit" onClick={sendPost}></button>
        </form>
        {attachment && (
          <img
            src={attachment}
            className="h-10 cursor-pointer object-contain"
            onClick={removeImage}
          />
        )}
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <span className="inputText">Live Video</span>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <span className="inputText">Photo/Video</span>
          <input
            ref={filePickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <span className="inputText">Feeling/Activity</span>
        </div>
      </div>
    </div>
  )
}

export default InputBox
