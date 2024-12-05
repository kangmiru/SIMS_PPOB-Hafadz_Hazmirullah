'use client'

import Image from 'next/image'
import React from 'react'

const services = [
  {
    title: 'PBB',
    img: '/assets/PBB.png',
  },
  {
    title: 'Listrik',
    img: '/assets/Listrik.png',
  },
  {
    title: 'Pulsa',
    img: '/assets/Pulsa.png',
  },
  {
    title: 'PDAM',
    img: '/assets/PDAM.png',
  },
  {
    title: 'PGN',
    img: '/assets/PGN.png',
  },
  {
    title: 'TV Langganan',
    img: '/assets/Televisi.png',
  },
  {
    title: 'Musik',
    img: '/assets/Musik.png',
  },
  {
    title: 'Voucher Game',
    img: '/assets/Game.png',
  },
  {
    title: 'Voucher Makanan',
    img: '/assets/Voucher_Makanan.png',
  },
  {
    title: 'Kurban',
    img: '/assets/Kurban.png',
  },
  {
    title: 'Zakat',
    img: '/assets/Zakat.png',
  },
  {
    title: 'Paket Data',
    img: '/assets/Paket_Data.png',
  },
]

function Service() {
  return (
    <div className="flex flex-row justify-between text-center mx-auto max-w-screen-lg gap-8">
      {services.map((service, index) => {
        return (
          <div key={index} className="flex flex-col items-center text-center w-[8%]">
            <div className="my-5">
              <img src={service.img} alt={service.title} className="h-14 w-auto" />
            </div>
            <p className="mt-3 text-sm break-words whitespace-normal leading-tight">
              {service.title}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default Service
