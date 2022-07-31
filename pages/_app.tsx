import type { AppProps } from 'next/app'
import '../styles/style.sass'
import '../utils/Tailwind.css'
import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
<SessionProvider>
  <Component {...pageProps} />
  <Header />
</SessionProvider>
)}