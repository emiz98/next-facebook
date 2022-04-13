import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Facebook 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
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
