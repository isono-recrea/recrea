"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // Slack Webhookに送信
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
        })
        // フォームをリセット
        setFormData({
          name: "",
          company: "",
          position: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setSubmitResult({
          success: false,
          message: "送信に失敗しました。しばらく経ってから再度お試しください。",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "送信に失敗しました。しばらく経ってから再度お試しください。",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-black border-t border-[#F2F2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#EDE3BF]">お問合せ</h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">
                会社名 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">
                役職 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">電話番号</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">お問合せ内容</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-[#172E3F] border-[#F2F2F2] text-white"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#BF3754] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                {isSubmitting ? "送信中..." : "送信する"} {!isSubmitting && <Send size={16} className="ml-2" />}
              </Button>
            </div>

            {submitResult && (
              <div
                className={`text-center p-4 rounded-md ${submitResult.success ? "bg-green-900 text-white" : "bg-red-900 text-white"}`}
              >
                {submitResult.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

