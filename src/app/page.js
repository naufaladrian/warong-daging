'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  //redirect to dashboard
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard')
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi
    </main>
  )
}
