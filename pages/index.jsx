import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home = () => {
  const isDemo = false
  const { data: session, status } = useSession()

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {status === 'loading' && (
        <img
          className="mx-auto flex h-[80vh] w-52 justify-center object-contain"
          src="/loader.gif"
          alt="loader"
        />
      )}
      {((session && status != 'loading') || isDemo) && (
        <main className="flex">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      )}
      {!session && status != 'loading' && !isDemo && <Welcome />}
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
