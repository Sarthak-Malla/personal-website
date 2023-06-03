import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className='w-full'>
        <div className='relative flex h-[738.74px] max-w-[1200px] mx-auto mt-1'>
          <div className='absolute mx-auto'>
            <Image src='/images/landing-page-min.png' alt='Landing Image' width={1200} height={738.74} sizes='(max-width: 100px) 100vw' className='m-0 mx-auto'/>
          </div>
          <div className='flex flex-col items-center justify-start mx-auto z-0 p-12
          bg-white bg-opacity-20 backdrop-filter backdrop-blur-[0.71px]'>
            <h1 className='text-9xl font-bold text-center text-primary
                            px-2 pb-1 max-w-[80%] mt-[5%]'>
              From Pixels to Predictions
            </h1>
            <h2 className='text-xl text-center text-white
                            p-3 max-w-[59%] mt-2
                            bg-primary bg-opacity-70'>
              Merging Software and Machine Learning
            </h2>
          </div>
        </div>
        <div className='h-[500px] min-w-full bg-gradient-to-r from-gray-900 via-darker to-gray-900
                        mt-[-200px] z-10'></div>
      </div>
    </main>
  )
}
