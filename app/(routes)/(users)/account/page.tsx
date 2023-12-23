import Link from "next/link";

export const dynamic = "force-static";

const AccountPage = () => {
  return (
    <div className="">
      <h1>Links</h1>
      <Link href="/my-orders">My Order</Link>
    </div>
  );
};

export default AccountPage;
