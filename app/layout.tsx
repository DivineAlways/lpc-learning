import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sirius Godtalk",
  description: "Where everything is everything... do you know what I mean?",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const pathname = headersList.get("x-invoke-path") || ""
  const isHomePage = pathname === "/"

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-800`}>
        {!isHomePage && <Header />}
        <main className="min-h-screen">{children}</main>
        {!isHomePage && <Footer />}
      </body>
    </html>
  )
}

