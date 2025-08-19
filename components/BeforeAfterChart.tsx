
'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(()=>import('react-plotly.js'), { ssr:false })
export function BeforeAfterChart({teams, before, after}:{teams:string[], before:number[], after:number[]}){
  return <Plot data={[{x:teams,y:before,type:'bar',name:'Before'},{x:teams,y:after,type:'bar',name:'After'}]}
    layout={{ barmode:'group', margin:{l:60,r:20,t:10,b:80}, xaxis:{tickangle:-30}, yaxis:{title:'Total ADA'} }}
    style={{width:'100%', height:480}} config={{displaylogo:false, responsive:true}} />
}
