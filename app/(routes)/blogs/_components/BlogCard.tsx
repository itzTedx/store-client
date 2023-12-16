import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-2 gap-1 sm:gap-3 py-6 md:py-9 border-b last:border-none">
      <div className="space-y-2 md:space-y-4">
        <Badge>LEARN</Badge>

        <h3 className="text-xl md:text-2xl font-glirock">
          <Link href="/" className="underline-animation">
            5 Major steps for Signboard Fixing - A Complete Guide
          </Link>
        </h3>
        <div className="text-foreground-400 text-sm">Oct 2, 2023</div>
      </div>
      <div className="relative aspect-[4/3] md:aspect-video">
        <Image
          src="/images/post-1.jpg"
          fill
          alt=""
          className="object-cover md:object-right rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogCard;
