"use client";

import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

const CartPage = () => {
  const cart = useCart();

  return (
    <div>
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold flex gap-x-2">
            Shopping Cart
            {cart.items.length > 0 && (
              <span>
                {"("}
                {cart.items.length}
                {")"}
              </span>
            )}
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500 mb-6">No items added to cart</p>
              )}
              <ul>
                {cart.items.map((data) => (
                  <CartItem data={data} key={data.id} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
