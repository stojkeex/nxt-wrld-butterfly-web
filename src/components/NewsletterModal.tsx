// NewsletterModal.tsx
import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function NewsletterModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000) // show after 1s
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/modal-image.webp"
            alt="Off-White Promo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 relative">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-black hover:text-gray-600"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-bold mb-2">JOIN THE NXT WRLD COMMUNITY</h2>
          <p className="text-sm text-gray-700 mb-4">
            Subscribe to our mailing list to get 10% off your first order and stay updated
            with new drops, events and more.
          </p>

          <input
            type="email"
            placeholder="Your Email*"
            className="w-full border border-gray-300 p-2 mb-4"
          />

          <div className="flex gap-4 mb-4">
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Menswear
            </label>
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Womenswear
            </label>
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Kids
            </label>
          </div>

          <label className="text-xs text-gray-600 block mb-2">
            <input type="checkbox" className="mr-2" />
            *I have read the <a href="/privacy" className="underline">Privacy Policy</a> and consent to marketing communications.
          </label>

          <label className="text-xs text-gray-600 block mb-6">
            <input type="checkbox" className="mr-2" />
            I consent to profiling data for personalization purposes.
          </label>

          <button className="w-full bg-black text-white py-2 font-semibold hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}
