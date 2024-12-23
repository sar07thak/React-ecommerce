import React from 'react'
import { Herosection } from '../components/Herosection'
import { BestSeller } from '../components/BestSeller'
import { OurPolicy } from '../components/OurPolicy'
import { NewsLetterBox } from '../components/NewsLetterBox'
import { LatestCollection } from '../components/LatestCollection'

export const Home = () => {
  return (
    <>
    <div className='bg-vi-'>

    </div>
    <Herosection />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <NewsLetterBox />
    </>
  )
}
