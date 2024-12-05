'use client'

import React from 'react'

const nominals = [
    {
        nilai: 10000
    },
    {
        nilai: 20000
    },
    {
        nilai: 50000
    },
    {
        nilai: 100000
    },
    {
        nilai: 250000
    },
    {
        nilai: 500000
    },
]


function QuickSelect() {
  return (
    <div className="grid grid-cols-3 gap-4 h-24 w-auto">
      {nominals.map((nominal, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-full border rounded-md text-center"
        >
          <span className="text-base">Rp. {nominal.nilai}</span>
        </div>
      ))}
    </div>
  )
}

export default QuickSelect
