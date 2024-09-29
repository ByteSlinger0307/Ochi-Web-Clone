import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121] '>
        <h1 className='font-["Neue_Montreal"] text-6xl'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-5 mt-20 border-[#B3CC5E]">
            <div className="w-1/2 ">
                <h1 className='text-6xl'>Our approach:</h1>
                <button className=' flex  uppercase gap-10 items-center px-10 py-6 mt-6 bg-zinc-900 rounded-full text-white'>Read More
                    <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#56612f]"></div>
        </div>
    </div>
  )
}

export default About
