import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Card1 from './components/Card1'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import PricingCard from './components/PricingCard'
import Pricing from './components/Pricing'

export default function Home() {
  return (
    <>
    <TopNav />
    
    <Hero />
    <Statistics />
    {/* <Testimonial  /> */}
    <Pricing  />
    <CTA />
    
   
    {/* <Card1 /> */}
    {/* <Footer /> */}
    </>
  )
}
