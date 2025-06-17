const languages = [
  { name: "JavaScript", level: 90, icon: "JS" },
  { name: "Python", level: 85, icon: "PY" },
  { name: "TypeScript", level: 80, icon: "TS" },
]

const frameworks = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Next.js", level: 85, icon: "N" },
  { name: "Firebase", level: 80, icon: "🔥" },
]

const tools = [
  { name: "Cursor AI", level: 95, icon: "🖱️" },
  { name: "Replit", level: 90, icon: "R" },
  { name: "Figma", level: 85, icon: "F" },
  { name: "v0.dev", level: 80, icon: "V" },
]

const skills = [
  "Python",
  "Java",
  "C/C++",
  "JavaScript",
  "HTML/CSS",
  "AI/ML",
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="section-title flex items-center justify-center gap-4">
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">AI/정보컴퓨터 교육과 웹 개발에 특화된 다양한 기술 스택</p>

        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl text-center text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center h-20"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
