'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/links', label: 'Links' },
  { href: '/videos', label: 'Videos' },
  { href: '/images', label: 'Images' },
  { href: '/music', label: 'Music' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="flex gap-4 p-4 sticky top-0 bg-white/80 backdrop-blur z-10 text-primary-dark">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} passHref legacyBehavior>
          <a className={`relative px-2 hover:text-primary-dark ${pathname===item.href ? 'font-bold' : ''}`}>{item.label}
            {pathname===item.href && (
              <motion.span layoutId="underline" className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary-dark" />
            )}
          </a>
        </Link>
      ))}
    </nav>
  )
}
