import type { Metadata } from "next"

import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import React from "react"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        // setting max-h-screen was the right move here
        className={cn("max-h-screen font-sans antialiased", fontSans.variable)}
      >
        {/* never give margins to the body causes ui-shift when using dialogues, apply it to main instead */}

        <nav>
          <h1>Student @ SSSIHL</h1>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Shadcn UI tutorial",
  description: "Generated by create next app",
}
