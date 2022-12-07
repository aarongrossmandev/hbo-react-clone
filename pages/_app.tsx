import '../styles/styles.scss'
import { HBOProvider } from '../components/HBOProvider';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <HBOProvider>
        <Component {...pageProps} />
      </HBOProvider>
      )
}

