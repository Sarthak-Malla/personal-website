import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className='w-full'>
        <div className='relative flex h-[738.74px] max-w-[1200px] mx-auto'>
          <div className='absolute mx-auto'>
            <Image src='/images/landing-page.png' alt='Landing Image' width={1200} height={738.74} sizes='(max-width: 100px) 100vw' className='m-0 mt-1 mx-auto'/>
          </div>
          <div className='flex items-center justify-center my-[100px] ml-auto mr-16 z-0
                          bg-black bg-opacity-[0.02] backdrop-filter backdrop-blur-sm
                          p-16 overflow-hidden'>
            <h1 className='text-5xl font-bold text-center text-white'>Lorem Ipsum</h1>
          </div>
        </div>
        <div className='h-[500px] min-w-full bg-gradient-to-r from-gray-900 via-black to-gray-900
                        mt-[-200px] z-10'></div>
      </div>
    </main>
  )
}
