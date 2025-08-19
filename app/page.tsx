
'use client'
import { KpiCard } from '@/components/KpiCard'
import { DataSourceBadge } from '@/components/DataSourceBadge'
import { useLang } from '@/components/LanguageToggle'
import Link from 'next/link'
export default function Page(){
  const lang=useLang()
  return (<div className="space-y-8">
    <section className="text-center py-6">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{lang==='en'?'VoteScope AI — Fair Funding, At a Glance':'VoteScope AI — 公平な配分を可視化'}</h1>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{lang==='en'?'Explore concentration, simulate caps, and review the evidence behind distribution changes.':'資金集中度を可視化し、上限適用後の分布変化をシミュレーションします。'}</p>
      <div className="mt-3"><DataSourceBadge date="2025-08-15" /></div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <KpiCard label={lang==='en'?'Concentration reduction (at 10% cap)':'集中度の低下（上限10%）'} value="18%" hint="demo data" />
      <KpiCard label={lang==='en'?'Teams flagged (clusters)':'フラグ済チーム（クラスター）'} value="27" hint="demo data" />
      <KpiCard label={lang==='en'?'Median share per team':'チームの中央値シェア'} value="2.3%" hint="demo data" />
    </section>
    <section className="flex flex-wrap items-center justify-center gap-3">
      <Link href="/heatmap" className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-50">Heatmap</Link>
      <Link href="/cap-simulator" className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-50">Cap Simulator</Link>
      <Link href="/top-movers" className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-50">Top Movers</Link>
      <Link href="/methodology" className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-50">Methodology</Link>
    </section>
  </div>)
}
