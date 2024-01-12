import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";

export const albert = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert",
});

export const glirock = localFont({
  src: "./glirock_regular-webfont.woff2",
  display: "swap",
  variable: "--font-glirock",
});

export const argesta = localFont({
  src: "./argesta.woff2",
  display: "swap",
  variable: "--font-argesta",
});

// export const circular = localFont({
//   src: [
//     {
//       path: "./circularxx/CircularXXWeb-book.woff2",
//       weight: "350",
//       style: "normal",
//     },
//     {
//       path: "./circularxx/CircularXXWeb-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./circularxx/CircularXXWeb-medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "./circularxx/CircularXXWeb-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-circular",
// });
