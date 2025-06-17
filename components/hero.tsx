"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "정보컴퓨터교육 전문가"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">미래 교육을 선도하는</span>
            <br />
            <span className="h-16 block">{typedText}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-lg">
          창의적 사고력과 문제해결 능력을 길러주며, 디지털 시대에 필요한 핵심 역량을 교육합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button size="lg" className="gap-2">
                문의하기 <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="#classes">
              <Button size="lg" variant="outline" className="gap-2">
                교육과정 둘러보기 <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="glass-card p-8 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-400/40 animate-ping"></div>
            <div className="absolute inset-8 rounded-full border border-cyan-400/50 animate-bounce"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-pulse">🧠</div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
