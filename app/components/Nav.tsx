'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
  {
    name: 'Top Up',
    path: '/pages/topup',
  },
  {
    name: 'Transaction',
    path: '/',
  },
  {
    name: 'Akun',
    path: '/',
  },
]

function Nav () {
  const pathname =usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && 'text-red-500'} capitalize font-medium`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav