'use client'

export default function Music() {
  return (
    <div className="p-8 space-y-4">
      <audio controls className="w-full rounded-xl shadow-inner">
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
