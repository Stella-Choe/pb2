import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb, School } from "lucide-react"

const features = [
  {
    title: "AI-기반 교육콘텐츠",
    description: "50+ 강의로 구성된 체계적인 AI 교육 커리큘럼",
    icon: <School className="h-12 w-12 text-blue-400" />,
    stat: "50+",
  },
  {
    title: "AI eBook 개발",
    description: "인터랙티브 요소가 포함된 EPUB 전자책 제작",
    icon: <BookOpen className="h-12 w-12 text-purple-400" />,
    stat: "70권",
  },
  {
    title: "AI 교육 컨설팅",
    description: "교육기관 맞춤형 AI 도입 및 활용 컨설팅",
    icon: <Lightbulb className="h-12 w-12 text-yellow-400" />,
    stat: "15개",
  },
  {
    title: "풀스택 웹개발",
    description: "React, Firebase 등을 활용한 실무 프로젝트",
    icon: <Code className="h-12 w-12 text-green-400" />,
    stat: "12건",
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">주요 특징</span>
        </h2>
        <p className="section-subtitle">AI Basic Dev는 교육, 개발, 컨설팅을 아우르는 종합 AI 플랫폼입니다</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  {feature.icon}
                  <span className="text-3xl font-bold text-primary">{feature.stat}</span>
                </div>
                <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
