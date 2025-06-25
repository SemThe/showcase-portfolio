import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SEMTHE - Creative Developer",
  description: "Portfolio van Sem - Creative Developer & Student ICT Studio Media aan Fontys",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
