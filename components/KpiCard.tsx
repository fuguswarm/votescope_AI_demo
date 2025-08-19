
export function KpiCard({label, value, hint}:{label:string, value:string, hint?:string}){
  return (
    <div className="rounded-2xl border p-4 shadow-sm bg-white">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
    </div>
  )
}
