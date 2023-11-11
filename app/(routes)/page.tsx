import Billboard from "@/components/Billboard";
import getBillboard from "@/actions/get-billboard";
import { Trusted } from "./_components/Trusted";
import getCategories from "@/actions/get-categories";
import Explore from "./_components/Explore";
import CategoryList from "@/components/CategoryList";
import { Button } from "@/components/ui/button";

export const revalidate = 30;

const HomePage = async () => {
  const billboard = await getBillboard("b356ae0a-c51c-47e5-86c6-baae568ef665");
  // const products = await getProducts({ isFeatured: true })
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <section className="sm:-mt-7 relative z-10 mt-6 hidden sm:block">
          <Explore />
        </section>

        <Trusted />

        <section>
          {categories.slice(0, 3).map((category) => (
            <div key={category.id} className="py-6">
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </div>
          ))}
          <div className="w-full h-96 bg-lime-300 grid place-content-center rounded-lg">
            Our Popular Products
          </div>
          {categories.slice(3, categories.length).map((category) => (
            <div key={category.id} className="py-6">
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </div>
          ))}
        </section>
        <section className="container max-w-6xl lg:rounded-md bg-[#102A2B] text-background py-9">
          {/* Jumpstart business offer section */}
          <div className="grid md:grid-cols-3 gap-4 gap-y-9">
            <div className="flex flex-col justify-between gap-3">
              <div className="">
                <h5 className="font-glirock text-2xl text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
                  STARTER KIT OFFER
                </h5>
                <p className="font-light">
                  Get a head start on your business with our all-in-one Starter
                  Kit combo offer - including a professional business card,
                  letterhead, and eye-catching A5 flyer.
                </p>
              </div>
              <Button variant="outline" className="w-fit">
                548AED
              </Button>
            </div>
            <div className="h-64 md:h-96 col-span-2 grid grid-cols-3 grid-rows-2 gap-2">
              <div className="bg-yellow-300 row-span-2 rounded-md"></div>
              <div className="bg-red-500 rounded-md"></div>
              <div className="bg-red-300  rounded-md"></div>
              <div className="bg-violet-500 col-span-2 rounded-md"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
