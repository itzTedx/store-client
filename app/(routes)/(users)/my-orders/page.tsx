import getOrders from "@/actions/get-orders";
import Invoice from "@/components/Invoice";

export const dynamic = "force-static";

export default async function MyOrdersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const orders = await getOrders(searchParams.orderId);

  if (!orders)
    return (
      <div className="container my-9">
        <h1 className="">Track your Orders</h1>
        <div className="flex flex-col"></div>
      </div>
    );
  return (
    <>
      <div className="container my-9">
        <h1 className="">Track your Orders</h1>
        <div className="flex flex-col">
          <span>Order Id: {orders?.id}</span>
          <span>
            Payment Status: {orders.isPaid ? "Paid" : "Pending Payment"}
          </span>
        </div>
      </div>
      <section className="">
        <Invoice data={orders} />
      </section>
    </>
  );
}
