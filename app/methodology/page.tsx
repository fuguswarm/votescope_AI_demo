
'use client'
import { useLang } from '@/components/LanguageToggle'
export default function MethodologyPage(){
  const lang=useLang()
  return (<div className="prose max-w-none">
    <h2>{lang==='en'?'Methodology & Notes':'手法と注記'}</h2>
    <p>{lang==='en'?'We aggregate team totals per fund, apply a configurable cap, and compare distributions. This demo uses static sample data for illustration.':'ファンド別のチーム合計を集計し、可変上限を適用して分布の変化を比較します。本デモは説明用のサンプルデータを使用しています。'}</p>
    <ul>
      <li>{lang==='en'?'Date format: YYYY-MM-DD':'日付形式：YYYY-MM-DD'}</li>
      <li>{lang==='en'?'Numbers: thousands separators, right-aligned':'数値：3桁区切り・右寄せ'}</li>
      <li>{lang==='en'?'Transparency: dataset and code are open for verification':'透明性：データセットとコードを公開'}</li>
    </ul>
    <p className="text-sm text-gray-500">{lang==='en'?'Limitations: demo values do not represent current vote totals; please refer to the linked dataset for real analyses.':'注意：デモの値は実際の投票総額を表すものではありません。実分析はリンク先のデータセットをご参照ください。'}</p>
  </div>)
}
