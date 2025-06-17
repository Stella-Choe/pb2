import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"
import Link from "next/link"

const classes = [
  {
    id: 1,
    title: "프로그래밍 기초&심화",
    description: "기초 개념부터 알고리즘, 프로젝트까지 단계별로 배우며 실전 코딩 역량 향상",
    image: "/placeholder.svg?height=200&width=400",
    rating: 5,
  },
  {
    id: 2,
    title: "인공지능 기초&심화",
    description: "이론과 실습을 병행하며 AI의 핵심 개념과 다양한 응용 사례를 폭넓게 학습",
    image: "/placeholder.svg?height=200&width=400",
    rating: 4.9,
  },
  {
    id: 3,
    title: "AI 기반 소프트웨어 개발",
    description: "AI 모델을 활용해 실제 작동하는 응용 프로그램을 개발하는 융합형 교육 과정",
    image: "/placeholder.svg?height=200&width=400",
    rating: 5,
  },
]

export default function Classes() {
  return (
    <section id="classes" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Classes</span>
        </h2>
        <p className="section-subtitle">교육 과정</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((course) => (
            <Card key={course.id} className="glass-card overflow-hidden">

              <CardHeader className="pb-2">
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{course.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t border-slate-700 pt-4 flex justify-between items-center">
                <Link href="#contact">
                  <Button>수강 신청</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
