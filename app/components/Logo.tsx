'use client'

import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex gap-4 justify-center'>
        <Image 
            src='/assets/Logo.png' 
            alt='logo'  
            height={25}
            width={25}
            className='object-contain'
            priority
        />
        <span className='text-lg font-semibold uppercase tracking-wider'>SIMS PPOB</span>
    </div>
  )
}

export default Logo
