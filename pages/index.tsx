import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import ScrollableCategory from '../components/ScrollableCategory'
import { populateWithDummyData } from '../utils/general'

const Home: NextPage = () => {
  const categoryItems: any = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    categoryItems.current = populateWithDummyData(30)
    setMounted(true)
  }, [])

  return (
    <div className="home">
      <Head>
        <title>Tecci Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {mounted && (
        <>
          <ScrollableCategory
            categoryArray={['Back to school', 'New Arrivals', 'Coming soon']}
            defaultCategory={'Back to school'}
            data={categoryItems.current}
          />

          <ScrollableCategory
            categoryArray={['Recommended for you', 'Only at adidas']}
            defaultCategory={'Recommended for you'}
            data={categoryItems.current}
          />
        </>
      )}
    </div>
  )
}

export default Home
