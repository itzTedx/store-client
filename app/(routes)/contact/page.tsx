import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Contact from './_components/Contact'
import Newsletter from '@/components/Newsletter'
import { ArrowBigDown } from 'lucide-react'

export const dynamic = 'force-static'

function ContactPage() {
  return (
    <>
      <div className="container grid sm:grid-cols-3 gap-6 py-12 items-center relative overflow-hidden">
        <div className="col-span-2 grid grid-cols-3 gap-3">
          <div className="bg-lime-300 rounded-lg p-3">Image</div>
          <div className="aspect-video bg-lime-300 col-span-2 rounded-lg p-3">
            Image
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl lg:text-6xl font-glirock text-primary-900 leading-tight">
            We&apos;re Here to Help
          </h1>
          <p className="text-lg">
            Have a question or need assistance? <br />
            Call us at{` `}
            <Link
              href="tel:+9714222333"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 py-0 h-auto'
              )}
            >
              +971 4 222 3333
            </Link>
          </p>
        </div>
        <div className="absolute bottom-2 right-2 lg:bottom-12 lg:right-12">
          <ArrowBigDown className="h-12 w-12 stroke-1 text-foreground-200 animate-bounce z-10" />
          <span className="h-36 w-36 bg-lime-300/20 dark:bg-lime-500/10 absolute -bottom-9 -right-9 blur-2xl rounded-full" />
        </div>
      </div>
      <Contact />
      <Newsletter />
    </>
  )
}

export default ContactPage
