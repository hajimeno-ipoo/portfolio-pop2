'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ImagesPage() {
  const imgs = [
    '/next.svg',
    '/vercel.svg',
    '/next.svg'
  ]
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 p-8" style={{scrollSnapType:'x mandatory'}}>
      {imgs.map((src, idx) => (
        <motion.div
          key={idx}
          className="snap-center shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Image src={src} alt={`img${idx}`} width={200} height={200} />
        </motion.div>
      ))}
    </div>
  )
}
