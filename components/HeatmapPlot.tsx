
'use client'
import dynamic from 'next/dynamic'
const Plot = dynamic(()=>import('react-plotly.js'), { ssr:false })
export function HeatmapPlot({z, x, y}:{z:number[][], x:string[], y:string[]}){
  return <Plot data={[{z, x, y, type:'heatmap', hoverongaps:false}]}
    layout={{ margin:{l:80,r:20,t:10,b:40}, xaxis:{tickangle:-30} }}
    style={{width:'100%', height:480}} config={{displaylogo:false, responsive:true}} />
}
