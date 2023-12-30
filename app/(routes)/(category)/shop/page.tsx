import getCategories from "@/actions/get-categories";
import CategoryList from "@/components/CategoryList";
import { Suspense } from "react";

const ProductsPage = async () => {
  const categories = await getCategories();
  return (
    <div aria-label="Products">
      <Suspense fallback={"Loading..."}>
        {categories.map((category) => (
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
  );
};

export default ProductsPage;
