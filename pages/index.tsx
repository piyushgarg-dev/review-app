import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={font.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <ToasterProvider />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}
