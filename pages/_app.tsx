import type { AppProps } from 'next/app'
import '../styles/style.sass'
import '../utils/Tailwind.css'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
<div>
  <Component {...pageProps} />
  <Header />
</div>
)}