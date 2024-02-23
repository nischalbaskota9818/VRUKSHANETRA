import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import "./globals.css"
import QueryWrapper from "@/components/wrapper/query-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcn UI",
    "Plant Disease Detection",
    "Rudraksh",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </QueryWrapper>
      </body>
    </html>
  )
}
