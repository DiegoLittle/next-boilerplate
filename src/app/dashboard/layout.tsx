'use client';
import { SessionProvider } from "next-auth/react"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <SessionProvider>
        <body>{children}</body>
        </SessionProvider>
      </html>
    )
  }