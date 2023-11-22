import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/get-billboard'
import { Trusted } from './_components/Trusted'
import getCategories from '@/actions/get-categories'
import Explore from './_components/Explore'
import CategoryList from '@/components/CategoryList'
import { Button } from '@/components/ui/button'
import StarterKit from '@/app/(routes)/_components/StarterKit'
import PopularProduct from '@/components/PopularProduct'
import { Suspense } from 'react'
import { Heading } from '@/components/ui/Heading'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 300

const HomePage = async () => {
  const billboard = await getBillboard('b356ae0a-c51c-47e5-86c6-baae568ef665')
  // const products = await getProducts({ isFeatured: true })
  const categories = await getCategories()

  return (
    <>
      <Billboard data={billboard} />
      <section className="relative z-[1] hidden mt-6 sm:-mt-7 sm:block mb-7">
        <Explore />
      </section>

      <Trusted />

      <section>
        <Suspense fallback={'Loading...'}>
          {categories.slice(0, 3).map((category) => (
            <div key={category.id} className="py-6">
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </div>
          ))}
        </Suspense>
        <section aria-label="Popular Products">
          <PopularProduct />
        </section>
        <Suspense fallback={'Loading...'}>
          {categories.slice(3, categories.length).map((category) => (
            <div key={category.id} className="py-6" aria-label={category.name}>
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </div>
          ))}
        </Suspense>
      </section>
      <section aria-label="Splash of Colors" className="overflow-hidden">
        <Heading title="Splash of Colors" link="blogs" action="All Articles" />
        <div className="grid lg:grid-cols-2 gap-12 container py-9 relative">
          <div className="absolute w-72 h-72 top-3 left-0 blur-3xl rounded-full bg-orange-500/10" />
          <div className="absolute w-72 h-72 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-3xl rounded-full bg-lime-400/5" />
          <div className="absolute w-72 h-72 top-1/2 right-9 blur-3xl rounded-full bg-sky-400/10" />
          <div className="absolute w-72 h-72 bottom-3 right-3 blur-3xl rounded-full bg-fuchsia-400/10" />
          <div className="space-y-6 border-b pb-9 lg:pb-0 lg:border-0">
            <h3 className="sr-only">Featured Blog</h3>
            <div className="relative aspect-video lg:aspect-[4/3]">
              <Image
                src="/images/post-1.jpg"
                fill
                alt=""
                className="object-cover"
              />
            </div>
            <h3 className="text-4xl font-glirock">
              <Link href="/" className="underline-animation">
                5 Major steps for Signboard Fixing - A Complete Guide
              </Link>
            </h3>
            <p className="text-sm font-light">
              From concept to reality, signboard creation and installation
              follow five pivotal steps. These encompass planning, creative
              design, precise printing, and expert installation, turning your
              vision into impactful signage. Explore the comprehensive guide to
              bring your ideas to life.
            </p>
            <div className="text-foreground-400">Oct 2, 2023</div>
          </div>
          <div className="grid grid-rows-3">
            <h3 className="sr-only">Few Latest Blogs</h3>
            <div className="grid grid-cols-2 gap-3 py-9 border-b">
              <div className="space-y-4">
                <p>LEARN</p>
                <h3 className="text-2xl font-glirock">
                  <Link href="/" className="underline-animation">
                    5 Major steps for Signboard Fixing - A Complete Guide
                  </Link>
                </h3>
                <div className="text-foreground-400">Oct 2, 2023</div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/post-1.jpg"
                  fill
                  alt=""
                  className="object-cover object-right"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 py-9 border-b">
              <div className="space-y-4">
                <p>LEARN</p>
                <h3 className="text-2xl font-glirock">
                  <Link href="/" className="underline-animation">
                    5 Major steps for Signboard Fixing - A Complete Guide
                  </Link>
                </h3>
                <div className="text-foreground-400">Oct 2, 2023</div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/post-1.jpg"
                  fill
                  alt=""
                  className="object-cover object-right"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 py-9">
              <div className="space-y-4">
                <p>LEARN</p>
                <h3 className="text-2xl font-glirock">
                  <Link href="/" className="underline-animation">
                    5 Major steps for Signboard Fixing - A Complete Guide
                  </Link>
                </h3>
                <div className="text-foreground-400">Oct 2, 2023</div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/post-1.jpg"
                  fill
                  alt=""
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/bg-hero.jpg')] dark:bg-[url('/hero-dark.jpeg')] bg-cover py-12">
        <StarterKit />
      </section>
    </>
  )
}

export default HomePage
