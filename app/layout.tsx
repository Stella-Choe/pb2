import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "정보컴퓨터교육 전문가",
  description: "생성형 AI·온라인 클래스·eBook 제작·풀스택 웹개발 역량을 결합한 퍼스널 브랜딩 및 교육 웹앱",
  openGraph: {
    title: "정보컴퓨터교육 전문가 | AI로 학습·개발·브랜딩의 초점을 맞추다",
    description: "생성형 AI·온라인 클래스·eBook 제작·풀스택 웹개발 역량을 결합한 퍼스널 브랜딩 및 교육 웹앱",
    type: "website",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
