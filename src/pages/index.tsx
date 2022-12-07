import dynamic from 'next/dynamic'
import Head from 'next/head'

const App = dynamic(() => import('../components/app'), {
  ssr:false
})


export default function Home() {
  return (
    <div className='h-screen flex'>
      <Head>
        <title>简历生成器</title>
        <meta name="description" content="在线编辑简历，PDF生成下载" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <App />
    </div>
  )
}
