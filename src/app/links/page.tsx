'use client'
import { motion } from 'framer-motion'

export default function Links() {
  const list = [
    { href: 'https://example.com', label: 'Example' },
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://nextjs.org', label: 'Next.js' },
  ]
  return (
    <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="p-8 space-y-4">
      {list.map((item) => (
        <li key={item.href}>
          <a className="text-blue-600 underline" href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </motion.ul>
  )
}
