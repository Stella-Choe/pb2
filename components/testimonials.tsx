"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "선생님 덕분에 제 꿈을 찾을 수 있었어요. 항상 격려해주시고 믿어주셔서 포기하지 않고 목표를 이룰 수 있었습니다.",
    name: "김OO 학생",
    role: "2023년 졸업생",
    stars: 5,
  },
  {
    quote: "수업이 정말 재미있었고 이해하기 쉬웠어요. 어려운 내용도 쉽게 설명해주셔서 성적이 많이 올랐습니다.",
    name: "이OO 학생",
    role: "현재 3학년",
    stars: 5,
  },
  {
    quote: "진로에 대해 고민이 많았는데, 선생님과의 상담을 통해 명확한 방향을 잡을 수 있었습니다.",
    name: "박OO 학생",
    role: "2024년 졸업생",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto text-center">
        <h2 className="section-title"><span className="gradient-text">Testinomials</span></h2>
        <p className="section-subtitle">함께 성장한 학생들이 전하는 진솔한 이야기</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-6 flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-4 flex-grow">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 