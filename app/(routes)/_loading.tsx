import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl flex flex-col-reverse md:grid md:grid-cols-2 overflow-hidden gap-4">
          <div className="h-full w-full flex flex-col justify-center gap-y-8">
            <div className="block font-bold text-3xl sm:text-5xl sm:max-w-xl max-w-xs">
              <Skeleton className="w-full rounded-xl " />
            </div>
            <Skeleton className="w-full rounded-xl " />
          </div>
          <div className="rounded-[53px] relative aspect-square overflow-hidden !bg-cover ">
            <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
