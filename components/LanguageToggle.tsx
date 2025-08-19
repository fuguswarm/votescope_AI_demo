
'use client'
import { useState, useEffect } from 'react'
export function LanguageToggle(){
  const [lang,setLang]=useState<'en'|'jp'>('en')
  useEffect(()=>{const s=localStorage.getItem('lang'); if(s==='jp'||s==='en') setLang(s as any)},[])
  function toggle(){ const v = lang==='en'?'jp':'en'; setLang(v); localStorage.setItem('lang', v); window.dispatchEvent(new CustomEvent('lang-change',{detail:v})) }
  return <button onClick={toggle} className="text-xs border px-2 py-1 rounded-md hover:bg-gray-50">{lang==='en'?'EN / 日本語':'日本語 / EN'}</button>
}
export function useLang(): 'en'|'jp' {
  const [lang,setLang]=useState<'en'|'jp'>('en')
  useEffect(()=>{ const upd=(e:any)=>setLang(e?.detail || (localStorage.getItem('lang') as any) || 'en'); upd(null); window.addEventListener('lang-change',upd as any); return ()=>window.removeEventListener('lang-change',upd as any)},[])
  return lang
}
