
'use client'
import { useMemo, useState } from 'react'
import { useLang } from '@/components/LanguageToggle'
const TEAMS=['Team A','Team B','Team C','Team D','Team E','Team F','Team G','Team H','Team I','Team J']
const BEFORE=[1900000,1400000,1200000,1100000,800000,600000,500000,400000,300000,200000]
export default function TopMoversPage(){
  const [cap,setCap]=useState(10)
  const after=useMemo(()=>BEFORE.map(v=>Math.min(v,1919949.6*cap/10)),[cap])
  const deltas=useMemo(()=>BEFORE.map((b,i)=>b-after[i]),[after])
  const items=useMemo(()=>TEAMS.map((t,i)=>({team:t,before:BEFORE[i],after:after[i],delta:deltas[i]})).sort((a,b)=>b.delta-a.delta).slice(0,10),[after])
  const lang=useLang()
  return (<div className="space-y-4">
    <div className="flex items-center gap-3">
      <h2 className="text-2xl font-semibold">{lang==='en'?'Top Movers':'変化が大きいチーム'}</h2>
      <input type="range" min={0} max={15} step={1} value={cap} onChange={e=>setCap(Number(e.target.value))}/>
      <div className="text-sm w-12">{cap}%</div>
    </div>
    <table className="w-full text-sm border">
      <thead className="bg-gray-50">
        <tr><th className="text-left p-2">#</th><th className="text-left p-2">{lang==='en'?'Team':'チーム'}</th><th className="text-right p-2">{lang==='en'?'Before (ADA)':'適用前(ADA)'}</th><th className="text-right p-2">{lang==='en'?'After (ADA)':'適用後(ADA)'}</th><th className="text-right p-2">{lang==='en'?'Δ (ADA)':'差(ADA)'}</th></tr>
      </thead>
      <tbody>
        {items.map((row,i)=>(<tr key={row.team} className="border-t">
          <td className="p-2">{i+1}</td>
          <td className="p-2">{row.team}</td>
          <td className="p-2 text-right">{row.before.toLocaleString()}</td>
          <td className="p-2 text-right">{row.after.toLocaleString()}</td>
          <td className="p-2 text-right">{row.delta.toLocaleString()}</td>
        </tr>))}
      </tbody>
    </table>
  </div>)
}
