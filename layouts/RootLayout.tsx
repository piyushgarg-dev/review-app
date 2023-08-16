import { Inter } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToasterProvider } from "@/providers/ToasterProvider";
import { Metadata } from "next";
import ModalProvider from "@/providers/ModalProvider";

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={font.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
            >
                <ToasterProvider />
                <ModalProvider />
                {children}
            </ThemeProvider>
        </div>
    )
}
