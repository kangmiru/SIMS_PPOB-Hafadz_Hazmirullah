import Saldo from '@/app/components/Saldo'
import Top_up from '@/app/components/Top_up'
import Welcome from '@/app/components/Welcome'
import React from 'react'

function Topup() {
  return (
    <section className="mx-40">
      <div className="container">
        <div className='grid grid-cols-2 gap-4 items-center mt-10'>
          {/* profile */}
          <div className="flex justify-start">
            <Welcome />
          </div>

          {/* saldo */}
          <div className='flex justify-end'>
            <Saldo/>
          </div>

        </div>
          {/* topup */}
        <div className='text-start m-4'>
          <h3 className='mt-7 capitalize text-medium tracking-wider'>
              Silakan masukan
          </h3>
          <h1 className='my-3 capitalize text-4xl font-bold tracking-wide'>
              Nominal Topup
          </h1>
          <Top_up />
        </div>

      </div>
    </section>
  )
}

export default Topup
