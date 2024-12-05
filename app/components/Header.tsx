import Image from 'next/image'
import React from 'react'

import Nav from './Nav'
import Logo from './Logo'
import Link from 'next/link'

function Header() {
  return (
    <div className="w-full bg-white border-b-2 border-gray-400">
      <div className="container mx-auto flex items-center justify-between px-40 py-4">
        <Link href="/pages/home" className="flex items-center space-x-5">
          <h2>
            <Logo />
          </h2>
        </Link>
        <Nav />
      </div>
    </div>
  )
}

export default Header
