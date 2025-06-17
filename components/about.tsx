import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">About</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="glass-card p-4 rounded-full w-64 h-64 md:w-80 md:h-80 relative overflow-hidden">
              <Image
                src="/character.jpeg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">전문 분야</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                  정보컴퓨터교육
                </Badge>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                  Generative AI
                </Badge>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                  eBook 개발
                </Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20">
                  풀스택 웹개발
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">주요 이력</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 서울 소재 고등학교 정보, 프로그래밍 강사</li>
                <li>• 공기업 디지털콘텐츠실</li>
                <li>• Applied Arts 학사(캐나다), 컴퓨터공학 학사, 정보컴퓨터교육 석사</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">학생 중심 교육</h3>
              <ul className="space-y-2 text-slate-300">
                개별 학생의 특성을 고려한 맞춤형 교육과 진로 지도
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">교육 혁신</h3>
              <ul className="space-y-2 text-slate-300">
              디지털 교육 도구 활용과 창의적 교수법 개발 및 적용
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
