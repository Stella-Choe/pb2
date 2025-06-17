"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "창의적 수업 설계",
    description: "학생 참여형 수업과 프로젝트 기반 학습을 통한 교육 혁신",
    image: "/portfolio1.png",
  },
  {
    id: 2,
    title: "진로 상담 및 지도",
    description: "개별 학생의 꿈과 목표를 실현할 수 있도록 체계적인 진로 지도",
    image: "/portfolio2.png",
  },
  {
    id: 3,
    title: "교육 연구 활동",
    description: "교육 방법론 연구와 학회 발표를 통한 전문성 향상",
    image: "/portfolio3.png",
  }
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects
   
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">다양한 교육 프로젝트와 연구 활동</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-52 p-20">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
              </div>
              <CardContent className="flex-grow p-4 text-center">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
