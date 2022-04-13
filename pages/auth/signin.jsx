import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Head from 'next/head'

function signin({ providers }) {
  return (
    <div>
      <Head>
        <title>Facebook 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="-mt-2 flex min-h-screen flex-col items-center 
      justify-center py-2 px-4 text-center"
      >
        <img className="w-80" src="/logo.svg" alt="" />
        <p className="font-xs italic">
          This is not a real app, It is built only for educational purposes
          only.
        </p>
        <div className="mt-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signin
