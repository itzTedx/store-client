import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl grid grid-cols-2 overflow-hidden gap-4">
      <div className="h-full w-full flex flex-col justify-center  gap-y-8">
        <div className="block font-bold text-3xl sm:text-5xl sm:max-w-xl max-w-xs z-50">
          {data?.label}
        </div>
        {data?.description}
      </div>
      <div className="rounded-[53px] relative aspect-square overflow-hidden !bg-cover ">
        <Image
          src={data?.imageUrl}
          fill
          className="object-cover"
          alt={data?.label}
        />
      </div>
    </div>
  );
};

export default Billboard;
