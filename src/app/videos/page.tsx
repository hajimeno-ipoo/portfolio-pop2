'use client'

export default function Videos() {
  return (
    <div className="p-8 space-y-8">
      <video
        controls
        className="w-full rounded-xl shadow-lg"
        src="https://media.w3.org/2010/05/sintel/trailer.mp4"
      />
    </div>
  )
}
