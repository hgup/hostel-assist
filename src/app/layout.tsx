import type { Metadata } from "next"

import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import React from "react"
import { UserNav } from "@/components/user-nav"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "SSSHSS Teachers",
  description: "with love",
}

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
        className={cn(
          "min-h-screen flex-1 flex-col font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* never give margins to the body causes ui-shift when using dialogues, apply it to main instead */}
        <nav className="m-5 p-5 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Teacher Admin Dashboard
            </h2>
            <p className="text-muted-foreground">Sairam</p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
