"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, MessageSquare, Youtube } from "lucide-react"

// Classes from components/classes.tsx for course selection
const availableClasses = [
  { id: 1, title: "프로그래밍 기초&심화" },
  { id: 2, title: "인공지능 기초&심화" },
  { id: 3, title: "AI 기반 소프트웨어 개발" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    phone: "",
    course: "",
    privacyConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnrollmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEnrollmentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const handleEnrollmentSelectChange = (value: string) => {
    setEnrollmentData((prev) => ({ ...prev, course: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form submitted:", formData);
    alert(`문의가 접수되었습니다. 감사합니다!\n\n이름: ${formData.name}\n이메일: ${formData.email}\n전화번호: ${formData.phone}\n문의 유형: ${formData.type}\n메시지: ${formData.message}`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    });
  };

  const handleSubmitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentData.privacyConsent) {
      alert("개인정보 수집 및 이용에 동의해야 수강 신청이 가능합니다.");
      return;
    }
    if (!enrollmentData.course) {
      alert("수강 과목을 선택해주세요.");
      return;
    }
    console.log("Enrollment Form submitted:", enrollmentData);
    alert(`수강 신청이 접수되었습니다. 감사합니다!\n\n이름: ${enrollmentData.name}\n전화번호: ${enrollmentData.phone}\n수강 과목: ${enrollmentData.course}`);
    setEnrollmentData({
      name: "",
      phone: "",
      course: "",
      privacyConsent: false,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Contact</span>
        </h2>
        <p className="section-subtitle">궁금한 점이나 협업 제안이 있으시면 언제든지 연락주세요</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">문의하기</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    이름
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">
                    이메일
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm">
                    전화번호
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm">
                    문의 유형
                  </label>
                  <Select value={formData.type} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="문의 유형 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class">수업 문의</SelectItem>
                      <SelectItem value="consulting">진로 상담</SelectItem>
                      <SelectItem value="collaboration">협업 제안</SelectItem>
                      <SelectItem value="other">기타 문의</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">
                  메시지
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="문의 내용을 입력해주세요"
                  rows={5}
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">개인정보 수집 및 이용에 동의합니다</label>
              </div>

              <Button type="submit" className="w-full">
                문의하기
              </Button>
            </form>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">수강신청</h3>
            <form onSubmit={handleSubmitEnrollment} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="enrollmentName" className="text-sm">
                  이름
                </label>
                <Input
                  id="enrollmentName"
                  name="name"
                  value={enrollmentData.name}
                  onChange={handleEnrollmentChange}
                  required
                  placeholder="홍길동"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="enrollmentPhone" className="text-sm">
                  전화번호
                </label>
                <Input
                  id="enrollmentPhone"
                  name="phone"
                  value={enrollmentData.phone}
                  onChange={handleEnrollmentChange}
                  required
                  placeholder="010-1234-5678"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="course" className="text-sm">
                  수강 과목
                </label>
                <Select value={enrollmentData.course} onValueChange={handleEnrollmentSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="수강 과목 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableClasses.map((cls) => (
                      <SelectItem key={cls.id} value={cls.title}>
                        {cls.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  id="enrollmentPrivacy"
                  name="privacyConsent"
                  checked={enrollmentData.privacyConsent}
                  onChange={handleEnrollmentChange}
                  required
                />
                <label htmlFor="enrollmentPrivacy">개인정보 수집 및 이용에 동의합니다</label>
              </div>

              <Button type="submit" className="w-full">
                수강 신청
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
