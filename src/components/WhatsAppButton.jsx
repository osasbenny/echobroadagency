import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '2348000000000' // Replace with actual WhatsApp number
  const message = 'Hello! I would like to learn more about EchoBroad Agency services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

