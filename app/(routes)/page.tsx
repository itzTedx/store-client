import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getFeaturedProducts from "@/actions/get-featured-products";
import PopularProduct from "@/app/(routes)/_components/PopularProduct";
import StarterKit from "@/app/(routes)/_components/StarterKit";
import Billboard from "@/components/Billboard";
import CategoryList from "@/components/CategoryList";
import { Heading } from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Explore from "./_components/Explore";
import Featured from "./_components/Featured";
import Portfolio from "./_components/Portfolio";
import { Trusted } from "./_components/Trusted";
import BlogCard from "./blogs/_components/BlogCard";
import { Organization, WithContext } from "schema-dts";
import { siteConfig } from "@/config/site";

export const revalidate = 300;
export const dynamic = "force-static";

const HomePage = async () => {
  const billboard = await getBillboard("b356ae0a-c51c-47e5-86c6-baae568ef665");
  const popular = await getFeaturedProducts({ isFeatured: true });
  const categories = await getCategories();

  const jsonLD: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/about`,
    name: siteConfig.shortName,
    logo: `${siteConfig.url}/apple-touch-icon.png`,
    description: siteConfig.description,

    url: siteConfig.url,
    legalName: "Digital Desk General Trading L.L.C.",
    alternateName: ["Digitaldesk, DD, Digital Print"],
    knowsAbout: [
      "Digital Printing",
      "Offset Printing",
      "Corporate Gifts",
      "Promotional Gifts",
      "Exhition & Event Printing Services",
    ],
    image: siteConfig.ogImage,
    sameAs: [
      "https://www.instagram.com/digitaldesk.uae/",
      "https://www.linkedin.com/company/digitaldesk-uae/",
      "https://www.threads.net/@digitaldesk.uae",
      "https://twitter.com/digitaldesk_uae",
      "https://www.facebook.com/digitaldesk.uae",
    ],

    email: "sales@digitaldesk.ae",
    telephone: "+971-4-252-0300",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 3, Bin Suwailem Building, Damascus Street",
      addressLocality: "Al Qusais",
      addressCountry: "AE",
      addressRegion: "Dubai",
    },
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <Billboard data={billboard} />
      <section className="relative z-[1] hidden mt-6 sm:-mt-7 sm:block mb-7">
        <Explore data={popular} />
      </section>

      <Trusted />

      <Featured />

      <div aria-label="Products">
        <Suspense fallback={"Loading..."}>
          {categories.slice(0, 3).map((category) => (
            <section
              key={category.id}
              className="py-6"
              aria-label={category.name}
            >
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </section>
          ))}
        </Suspense>
        <div aria-label="Popular Products" className="container">
          <PopularProduct data={popular} />
        </div>
        <Suspense fallback={"Loading..."}>
          {categories.slice(3, categories.length).map((category) => (
            <section
              key={category.id}
              className="py-6"
              aria-label={category.name}
            >
              <CategoryList
                title={category.name}
                items={category.subcategory}
                link={category.slug}
              />
            </section>
          ))}
        </Suspense>
      </div>
      {/* <section aria-label="Splash of Colors" className="overflow-hidden">
        <Heading title="Splash of Colors" link="blogs" action="All Articles" />
        <div className="grid lg:grid-cols-2 gap-12 container py-9 relative">
          <div
            className="absolute w-72 h-72 top-3 left-0 blur-3xl rounded-full bg-orange-500/10"
            aria-hidden
          />
          <div
            className="absolute w-72 h-72 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-3xl rounded-full bg-lime-400/5"
            aria-hidden
          />
          <div
            className="absolute w-72 h-72 top-1/2 right-9 blur-3xl rounded-full bg-sky-400/10"
            aria-hidden
          />
          <div
            className="absolute w-72 h-72 bottom-3 right-3 blur-3xl rounded-full bg-fuchsia-400/10"
            aria-hidden
          />
          <div className="space-y-4 sm:space-y-6 border-b pb-9 lg:pb-0 lg:border-0">
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
            <p className="text-sm">
              From concept to reality, signboard creation and installation
              follow five pivotal steps. These encompass planning, creative
              design, precise printing, and expert installation, turning your
              vision into impactful signage. Explore the comprehensive guide to
              bring your ideas to life.
            </p>
            <div className="text-foreground-400 text-sm">Oct 2, 2023</div>
          </div>
          <div className="grid grid-rows-3">
            <h3 className="sr-only">Few Latest Blogs</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section> */}

      <section className="w-full overflow-hidden">
        <Portfolio />
      </section>

      <section
        className="bg-[url('/bg-hero.jpg')] dark:bg-[url('/hero-dark.jpeg')] bg-cover py-12"
        aria-label="Starter Kit Offer"
      >
        <StarterKit />
      </section>
    </>
  );
};

export default HomePage;
