
'use client'
import { useState } from 'react'
export function CapSlider({onChange, initial=10}:{onChange:(v:number)=>void, initial?:number}){
  const [v,setV]=useState(initial)
  return (<div className="flex items-center gap-3">
    <input type="range" min={0} max={15} step={1} value={v} onChange={e=>{const x=Number(e.target.value); setV(x); onChange(x)}} className="w-64"/>
    <div className="w-16 text-sm text-gray-700">{v}%</div>
  </div>)
}
