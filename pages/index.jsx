import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { useState } from 'react'

const Home = () => {
  const [isDemo, setIsDemo] = useState(false)
  const { data: session, status } = useSession()

  return (
    <div
      className={`${isDemo && 'h-screen'} ${
        session && 'h-screen'
      } overflow-hidden bg-gray-100`}
    >
      <Head>
        <title>Facebook 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isDemo={isDemo} />
      {status === 'loading' && (
        <img
          className="mx-auto flex h-[80vh] w-52 justify-center object-contain"
          src="/loader.gif"
          alt="loader"
        />
      )}
      {((session && status != 'loading') || isDemo) && (
        <main className="flex">
          <Sidebar isDemo={isDemo} />
          <Feed isDemo={isDemo} />
          <Widgets />
        </main>
      )}
      {!session && status != 'loading' && !isDemo && (
        <Welcome setIsDemo={setIsDemo} />
      )}
      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
