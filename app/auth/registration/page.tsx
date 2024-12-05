'use client'

import Form from '@/app/components/Form'
import Logo from '@/app/components/Logo'
import Image from 'next/image'
import React, { useState } from 'react'

function Registration() {

  return (
        <section className='m-0 p-0'>
            <div className='bg-white h-screen flex sm:flex-row items-center sm:items-stretch'>
                {/* from section */}
                <div className='flex-1 p-6 mt-5'>
                    <div className='text-center'>
                        
                        {/* logo */}
                        <div className='mt-16'>
                            <Logo />
                        </div>
                        
                        {/* title */}
                        <div className='mt-4'>
                            <h2 className='text-xl font-bold tracking-wide'>Lengkapi data untuk <br /> membuat akun</h2>
                        </div>

                        {/* form */}
                        <div className='container flex justify-center'>
                            <Form />
                        </div>

                        {/* pindah ke login */}
                        <div className='mt-4'>
                            <p className='text-sm text-gray-600'>sudah punya akun? login <a href="/auth/login" className='text-red-500'>di sini</a></p>
                        </div>
                    </div>
                </div>

                {/* section cover */}
                <div className='flex-1 relative'>
                    <Image 
                        src='/assets/Illustrasi_Login.png' 
                        layout='fill' 
                        objectFit='cover' 
                        alt='Illustrasi_Login' 
                        className=''/>
                </div>
            </div>
        </section>
  )
}

export default Registration
