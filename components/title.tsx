import Link from 'next/link'

export default function Title() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      .
    </h2>
  )
}
