import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';


function LandingPage() {
  return (
    <div className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className="textStructure mt-28 px-14">
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return (
                <div className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (
                            <div className="mr-5 w-[8vw] rounded-md h-[5.7vw] top realtive bg-red-600">
                                <img src="" alt=""/>
                            </div>
                        )}
                        <h1 className="uppercase text-8xl text-[#212121] -leading-[9vw] tracking-tighter font-bold  font-['Founders Grotesk Condensed']">{item}
                        </h1>
                    </div>
                </div>
            );
            })}
        </div>
        <div className="border-t-[1px] text-[#212121] font-medium border-zinc-800 mt-36 flex justify-between items-center py-5 px-24">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
                <p className='text-md font-medium tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                <div className="uppercase px-4 py-2 border-[1px] border-zinc-800 rounded-full">Start The Project</div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-800 rounded-full ">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
