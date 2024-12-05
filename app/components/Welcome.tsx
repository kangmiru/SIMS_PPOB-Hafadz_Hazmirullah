import Image from 'next/image'
import React from 'react'

function Welcome() {
  return (
    <div className="flex flex-col items-start space-x-5 py-3">
      <Image 
        src='/assets/Profile_photo.png'
        alt='profile'
        height={75}
        width={75}
        className='object-contain mx-6'
        priority
      />
      <div className='text-start'>
        <h3 className='mt-7 capitalize text-medium tracking-wider'>
          Selamat Datang,
        </h3>
        <h1 className='mt-3 capitalize text-4xl font-bold tracking-wide'>
          Kristanto Wibowo
        </h1>
      </div>
    </div>
  )
}

export default Welcome
