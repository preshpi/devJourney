import Blog from "@/components/Blog";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Steps from "@/components/Steps";
import Head from 'next/head'


export default function Home() {
  return (
   <div className="mx-auto w-[90%]">
    <Head>
      <title>devJourney | Home</title>
    </Head>
    <Nav/>
    <Hero/>
    <Steps/>
    <Blog/>
    <Community/>
   </div>
  )
}
