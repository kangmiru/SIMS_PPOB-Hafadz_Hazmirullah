'use client'

import React from 'react'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import QuickSelect from './QuickSelect'

function Top_up() {
  return (
    <div className="container grid grid-cols-2 gap-4 items-center mt-10">
      <div className="my-10">
        {/* nominal */}
        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm">
            <CreditCardIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm mx-2 my-1"
            placeholder="masukan nominal"
          />
        </div>

        {/* tombol topup */}
        <button className="w-full mt-4 py-2 text-center bg-red-600 text-white rounded-md hover:bg-red-500">
          Top up
        </button>
      </div>

      {/* quick select */}
      <div className='mx-4'>
        <QuickSelect/>
      </div>
    </div>
  )
}

export default Top_up
