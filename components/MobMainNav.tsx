"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MobMainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mb-4">
      <ul className="flex sm:hidden gap-3">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-xs font-medium transition-colors hover:text-black",
              route.active ? "text-lime-700" : "text-neutral-400"
            )}
          >
            <li>{route.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobMainNav;
