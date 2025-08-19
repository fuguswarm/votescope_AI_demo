
'use client'
import Link from 'next/link'
import { LanguageToggle } from '@/components/LanguageToggle'
export function Header(){
  return (
    <header className="border-b border-gray-100 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl tracking-tight">VoteScope AI</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/heatmap" className="hover:text-gray-800">Heatmap</Link>
          <Link href="/cap-simulator" className="hover:text-gray-800">Cap Simulator</Link>
          <Link href="/top-movers" className="hover:text-gray-800">Top Movers</Link>
          <Link href="/methodology" className="hover:text-gray-800">Methodology</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a className="text-xs px-3 py-1.5 rounded-full bg-black text-white" href="https://github.com/fuguswarm/votescope_AI_demo" target="_blank">GitHub</a>
        </div>
      </div>
    </header>
  )
}
