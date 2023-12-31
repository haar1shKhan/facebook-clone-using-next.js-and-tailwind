import Header from '@/components/Header'
import Head from 'next/head'
import { getSession } from "next-auth/react"
import Login from '@/components/Login'
import SideBar from '@/components/SideBar';
import Feed from '@/components/Feed';
import Widget from '@/components/Widget';


export default function Home({session}) {

  console.log(session);
  if(!session) return <Login/>


  return (
    <div  className=' bg-gray-100 h-screen overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className='flex '>
          <SideBar/>
          <Feed/>
          <Widget/>
      </main>

    </div>
  )
}

export const getServerSideProps =async (context)=>{

  const session = await getSession(context)

    return {
      props: {
        session
      }
    }


}