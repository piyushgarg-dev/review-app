import { Metadata } from "next";
import { Inter } from "next/font/google";

import { ModalProvider } from "@/providers/ModalProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToasterProvider } from "@/providers/ToasterProvider";

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Review App Dashboard',
    description: 'Review App Dashboard',
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
