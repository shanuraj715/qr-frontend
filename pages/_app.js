import '@/styles/globals.scss'
import { Roboto_Slab } from 'next/font/google'
import Layout from '@/Layouts/Layout'
import { Tooltip } from 'react-tooltip';

const roboto_slab = Roboto_Slab({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <div className={`${roboto_slab.className}`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Tooltip id="my-tooltip-data-html" />
  </div>
}
