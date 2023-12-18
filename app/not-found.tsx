import Link from 'next/link'
import { headers } from 'next/headers'
import FuzzyOverlay from '@/components/misc/FuzzyOverlay'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center flex-col">
      <h2 className="text-6xl font-black">Not Found</h2>
      <p className="text-lg">Could not find requested resource</p>

      <Link
        href="/"
        className={cn(buttonVariants({ variant: 'link' }), 'px-0')}
      >
        Come back to home
      </Link>

      <FuzzyOverlay />
    </div>
  )
}
