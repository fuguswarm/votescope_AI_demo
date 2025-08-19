
'use client'
import { CapSlider } from '@/components/CapSlider'
import { BeforeAfterChart } from '@/components/BeforeAfterChart'
import { useState, useMemo } from 'react'
import { useLang } from '@/components/LanguageToggle'
const TEAMS=['Team A','Team B','Team C','Team D','Team E','Team F','Team G','Team H','Team I','Team J']
const BEFORE=[1900000,1400000,1200000,1100000,800000,600000,500000,400000,300000,200000]
export default function CapSimulatorPage(){
  const [cap,setCap]=useState(10)
  const after=useMemo(()=>BEFORE.map(v=>Math.min(v,1919949.6*cap/10)),[cap])
  const lang=useLang()
  return (<div className="space-y-4">
    <h2 className="text-2xl font-semibold">{lang==='en'?'Cap Simulator':'上限シミュレーター'}</h2>
    <p className="text-sm text-gray-600">{lang==='en'?'Adjust the cap and compare total ADA per team before/after (demo data).':'上限値を調整し、チーム別の総ADA（適用前/後）を比較します（デモデータ）。'}</p>
    <CapSlider onChange={setCap} initial={10} />
    <BeforeAfterChart teams={TEAMS.slice(0,10)} before={BEFORE.slice(0,10)} after={after.slice(0,10)} />
    <div className="text-xs text-gray-500">{lang==='en'?'Note: For demo, cap baseline uses an example 10% reference (1,919,949.6 ADA).':'注：デモでは、上限の基準として例示の10%（1,919,949.6 ADA）を使用。'}</div>
  </div>)
}
