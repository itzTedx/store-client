import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import WelcomeModal from "@/components/WelcomeModal";
import BreakpointIndicator from "@/components/misc/BreakpointIndicator";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

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
      <ModalProvider />
      {/* <WelcomeModal /> */}
      <Navbar />

      <main>{children}</main>
      <BreakpointIndicator />
      <Footer />
    </ThemeProvider>
  );
}
