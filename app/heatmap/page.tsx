
'use client'
import { HeatmapPlot } from '@/components/HeatmapPlot'
import { useState } from 'react'
import { useLang } from '@/components/LanguageToggle'
export default function HeatmapPage(){
  const [x]=useState(['Fund7','Fund8','Fund11'])
  const [y]=useState(['Team A','Team B','Team C','Team D','Team E'])
  const [z]=useState([[12,9,7],[5,14,4],[3,2,11],[10,7,6],[1,3,5]])
  const lang=useLang()
  return (<div className="space-y-4">
    <h2 className="text-2xl font-semibold">{lang==='en'?'Funding Concentration Heatmap':'資金集中度ヒートマップ'}</h2>
    <p className="text-sm text-gray-600">{lang==='en'?'Darker cells indicate higher concentration by team across funds (demo data).':'濃いセルほど、各ファンドにおけるチームの集中が高いことを示します（デモデータ）。'}</p>
    <HeatmapPlot x={x} y={y} z={z} />
  </div>)
}
