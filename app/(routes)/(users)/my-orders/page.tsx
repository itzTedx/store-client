import getOrders from '@/actions/get-orders'

const MyOrdersPage = async () => {
  const orders = await getOrders()

  return (
    <div className="container my-12">
      My Orders {orders.length}
      <div>items:</div>
    </div>
  )
}

export default MyOrdersPage
