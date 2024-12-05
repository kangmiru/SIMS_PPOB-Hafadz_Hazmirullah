'use client'

import React, { useState } from 'react'
import { EyeIcon,EyeSlashIcon } from '@heroicons/react/24/outline'

function Saldo() {
    const [isSaldoVisible, setSaldoVisible] = useState(false)

    const toggleSaldoVisibility = () => {
        setSaldoVisible(prevState => !prevState)
    }
  return (
    <div className="bg-saldo-bg bg-no-repeat h-auto w-full bg-cover rounded-xl">
        <div className='py-5 text-white ml-14'>
            <h3 className='text-base tracking-wide'>Saldo anda</h3>
            <span className='text-4xl font-bold mt-2 mr-auto tracking-wider'>Rp. 
                {isSaldoVisible ? '1.000.000' : '•••••••'}
            </span>
            <p className='text-sm capitalize mt-3 mb-6'>
                <button onClick={toggleSaldoVisibility} className="flex items-center text-sm">
                    <span className="mr-2">lihat saldo </span>
                    {isSaldoVisible ? <EyeSlashIcon className="h-4 w-4 text-white" /> : <EyeIcon className="h-5 w-5 text-white" />}
                </button>
            </p>
        </div>
    </div>
  )
}

export default Saldo
