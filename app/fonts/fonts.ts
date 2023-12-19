import { Albert_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const albert = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert',
})

export const glirock = localFont({
  src: './glirock_regular-webfont.woff2',
  display: 'swap',
  variable: '--font-glirock',
})

export const argesta = localFont({
  src: './argesta.woff2',
  display: 'swap',
  variable: '--font-argesta',
})
