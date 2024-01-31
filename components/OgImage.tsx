import { ImageResponse } from "next/og";
import Logo from "@/components/ui/Logo";

export type Props = {
  title?: string;
};

// Route segment config
export const runtime = "edge";

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: "Digital",
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <Logo />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await fetch(
            new URL("glirock_regular-webfont.woff2", import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
