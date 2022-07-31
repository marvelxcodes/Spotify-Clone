import type { NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'

const Login : NextPage = ({ providers }: any) => {
    return(
<div className='flex bg-green-400 select-none h-screen items-center justify-center'>
    <div className="p-4 relative shadow-2xl rounded-md bg-white h-80 w-60 flex items-center  flex-col">
        <h1 className='font-bold mt-6 text-xl'>Sign In</h1>
        <img className='h-28 mt-6' src="/Spotify.png" alt="" />
        {Object.values(providers).map((provider:any) => (
            <button key={provider.name}
                    className='bg-green-400 hover:bg-green-500 transition-colors absolute bottom-0 m-4 shadow-xl rounded text-sm font-semibold h-10 w-52'
                    onClick={() => signIn(provider.id, {callbackUrl: '/'})}>
                Sign In to {provider.name}
            </button>
        ))}
    </div>
</div>
)}

export const getServerSideProps = async () => {
    const providers = await getProviders()
    return {
        props: { providers }
    }
}
  
export default Login