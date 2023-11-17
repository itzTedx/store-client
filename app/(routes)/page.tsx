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
        <section>
          <PopularProduct />
        </section>
        <Suspense fallback={'Loading...'}>
          {categories.slice(3, categories.length).map((category) => (
            <div key={category.id} className="py-6">
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </div>
          ))}
        </Suspense>
      </section>
      <section className="bg-[url('/bg-hero.jpg')] dark:bg-[url('/hero-dark.jpeg')] bg-cover py-12">
        <StarterKit />
      </section>
    </>
  )
}

export default HomePage
