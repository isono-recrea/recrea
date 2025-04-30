import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "株式会社リ・クリエ | 自動車学校の変革を、共に。",
  description:
    "マーケティング、DX、M&Aに特化した自動車学校向け経営支援サービスを提供する株式会社リ・クリエの公式サイトです。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KPV5XSEF1X" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KPV5XSEF1X');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'