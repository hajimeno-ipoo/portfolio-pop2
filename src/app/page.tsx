'use client'
import { motion } from 'framer-motion'
import Cube from '../components/Cube'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold">
        私のポートフォリオへようこそ
      </motion.h1>
      <Cube />
      <p className="text-center max-w-xl">
        これはFramer MotionとThree.jsを使った実験的なナビゲーションサイトです。
      </p>
    </main>
  )
}
