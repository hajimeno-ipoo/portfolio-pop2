'use client'
import Image from 'next/image'

export default function ImagesPage() {
  const imgs = [
    '/next.svg',
    '/vercel.svg',
    '/next.svg'
  ]
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 p-8" style={{scrollSnapType:'x mandatory'}}>
      {imgs.map((src, idx) => (
        <div key={idx} className="snap-center shrink-0">
          <Image src={src} alt={`img${idx}`} width={200} height={200} />
        </div>
      ))}
    </div>
  )
}
