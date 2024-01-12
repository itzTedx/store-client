import Footer from "@/components/Footer";
import BreakpointIndicator from "@/components/misc/BreakpointIndicator";
import Navbar from "@/components/navbar/Navbar";

import BottomBar from "@/components/navbar/BottomNavBar";
import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <ToastProvider />
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar">
                    <div class="peg"></div>
                  </div>'
        zIndex={99999999999}
        showAtBottom={false}
      />
      <ModalProvider />
      {/* <WelcomeModal /> */}
      <Navbar />

      <main>{children}</main>
      <BreakpointIndicator />
      <Footer />
      <BottomBar />
    </ThemeProvider>
  );
}
