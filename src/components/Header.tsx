import Link from 'next/link'
import { UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Construction SaaS</Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  )
}

