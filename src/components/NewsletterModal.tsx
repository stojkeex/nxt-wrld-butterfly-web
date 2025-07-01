import { useEffect } from 'react'
import { Check, X } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
      <div className="relative bg-white text-black rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 text-center space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-500"
        >
          <X size={24} />
        </button>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
          Be First To Know
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Sign up to get early access to limited releases & exclusive content.
        </p>

        {/* ✅ Bullet Points */}
        <div className="text-left space-y-3">
          <div className="flex items-start gap-3">
            <Check className="text-green-600 mt-1" size={20} />
            <p className="text-sm sm:text-base">Access to limited edition drops</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-600 mt-1" size={20} />
            <p className="text-sm sm:text-base">Early access to new collections</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="text-green-600 mt-1" size={20} />
            <p className="text-sm sm:text-base">Exclusive community content</p>
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
          />
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition uppercase tracking-wide text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterModal
