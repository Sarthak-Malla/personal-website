"use client";

import Image from 'next/image'
import { useState } from 'react';

import { Mukta } from 'next/font/google';

const mukta = Mukta({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function Home() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className='w-full'>
        <div className={mukta.className}>
          <div className='relative flex h-[738.74px] max-w-[1200px] mx-auto mt-1'>
            <div className='absolute mx-auto'>
              <Image src={hovered ? '/images/landing-page-edge.png' : '/images/landing-page-min.png'} alt='Landing Image' width={1200} height={738.74} sizes='(max-width: 100px) 100vw' className='m-0 mx-auto'/>
            </div>
            <div className='flex flex-col items-center justify-start mx-auto z-0 p-12
            bg-white bg-opacity-10 backdrop-filter backdrop-blur-[0.5px]'>

              <h1 className='text-9xl font-bold text-center text-primary
                              px-2 pb-1 max-w-[80%] mt-[5%]'>
                From <span className='text-red-500'>Pixels</span> to <span className="hover:text-red-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Predictions</span>
              </h1>
              <h2 className='text-xl text-center text-white
                              p-3 max-w-[59%] mt-2
                              bg-primary bg-opacity-70'>
                Merging Software and Machine Learning
              </h2>
            </div>
          </div>
        </div>
        <div className=' h-[500px] min-w-full bg-gradient-to-r from-gray-900 via-darker to-gray-900
                        mt-[-13%] z-10'></div>
      </div>
    </main>
  )
}
