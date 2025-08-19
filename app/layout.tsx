
import './globals.css'
import { Header } from '@/components/Header'
export const metadata = { title: 'VoteScope AI Demo', description: 'Fair funding insights — bilingual.' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en"><body className="min-h-screen bg-white text-gray-900"><Header/><main className="max-w-6xl mx-auto px-4 py-8">{children}</main></body></html>)
}
