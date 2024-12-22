import React from 'react'
import { Herosection } from '../components/Herosection'
import { LatestCollection } from '../components/latestCollection'
import { BestSeller } from '../components/BestSeller'
// import { LatestCollection } from '../components/atestCollection'

export const Home = () => {
  return (
    <>
    <Herosection />
    <LatestCollection />
    <BestSeller />
    </>
  )
}
