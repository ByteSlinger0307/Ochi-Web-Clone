import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2  border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1  className='text-[25vw] leading-none font-["Founders Grotesk"] font-bold uppercase'>We Are Ochi</h1>
        <h1  className='text-[25vw] leading-none font-["Founders Grotesk"] font-bold uppercase'>We Are Ochi</h1>
      </div>
    </div>
  )
}

export default Marquee
