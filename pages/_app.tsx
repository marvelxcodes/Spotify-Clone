import type { AppProps } from 'next/app'
import '../styles/index.sass'
import '../utils/Tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
<div>
  <Component {...pageProps} />
</div>
)}