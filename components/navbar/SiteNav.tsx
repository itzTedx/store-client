'use client'

import { BadgePlus, Home, Search, ShoppingBag, User2 } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SiteNav = () => {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Adjust the threshold as needed
    const threshold = documentHeight - windowHeight - 1000

    setIsVisible(scrollY > threshold)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'sticky z-40 mx-3 bg-background/80 border rounded-lg backdrop-blur-lg px-3 py-3 grid grid-cols-4 justify-between bottom-2',
        isVisible ? 'bg-red-500' : 'bg-green-500'
      )}
    >
      <Button
        onClick={() => router.push('/')}
        variant="ghost"
        size="lg"
        className="flex flex-col items-center"
      >
        <Home />
      </Button>
      <Button
        onClick={() => router.push('/shop')}
        variant="ghost"
        size="lg"
        className="flex flex-col items-center"
      >
        <Search />
      </Button>
      <Button
        onClick={() => router.push('/cart')}
        variant="ghost"
        size="lg"
        className="flex flex-col items-center"
      >
        <ShoppingBag />
      </Button>
      <Button
        onClick={() => router.push('/account')}
        variant="ghost"
        size="lg"
        className="flex flex-col items-center"
      >
        <User2 />
      </Button>
    </div>
  )
}

export default SiteNav
