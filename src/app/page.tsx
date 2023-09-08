import React from 'react'
import { dotGothic16 } from '../../fonts'

export default function Home() {

  return (
    <div className='flex justify-end flex-col w-full h-full py-20 px-20'>
      <h1 className={`${dotGothic16.className} text-white h-fit font-bold text-8xl text-center uppercase`}>Welcome Abored</h1>
    </div>
  )
}
