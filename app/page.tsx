import Destination from '@/components/Main/Destination'
import Experience from '@/components/Main/Experience'
import Footer from '@/components/Main/Footer'
import Header from '@/components/Main/Header'
import Hero from '@/components/Main/Hero'
import Offers from '@/components/Main/Offers'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
     
      <Hero />
      <Destination />
      <Experience />
      <Offers />
      {/* <Footer/> */}
    </>
  );
}
