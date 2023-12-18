import Footer from '@/components/Footer'
import BreakpointIndicator from '@/components/misc/BreakpointIndicator'
import Navbar from '@/components/navbar/Navbar'

import BottomBar from '@/components/navbar/BottomNavBar'
import ModalProvider from '@/providers/modal-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import ToastProvider from '@/providers/toast-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <ToastProvider />
      <ModalProvider />
      {/* <WelcomeModal /> */}
      <Navbar />

      <main>{children}</main>
      <BreakpointIndicator />
      <Footer />
      <BottomBar />
    </ThemeProvider>
  )
}
