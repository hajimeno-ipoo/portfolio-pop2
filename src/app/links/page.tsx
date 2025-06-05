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
          <a
            className="flex items-center gap-2 text-primary hover:underline"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </motion.ul>
  )
}
