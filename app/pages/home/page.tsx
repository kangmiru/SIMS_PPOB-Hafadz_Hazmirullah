import Service from '@/app/components/Service'
import Saldo from '@/app/components/Saldo'
import React from 'react'
import Slider from '@/app/components/Slider'
import Welcome from '@/app/components/Welcome'

function Home() {
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

        {/* service */}
        <div className='mt-10 flex justify-center'>
          <Service/>
        </div>

        {/* slider banner */}
        <div className='mt-10 grid grid-rows-2 pb-96'>
          <h2 className='flex text-lg font-semibold'>Temukan promo menarik</h2>
          <Slider/>
        </div>

      </div>
    </section>
  )
}

export default Home
