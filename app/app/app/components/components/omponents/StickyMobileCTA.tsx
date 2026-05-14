'use client'

interface StickyMobileCTAProps {
  onStart: () => void
}

export default function StickyMobileCTA({ onStart }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-teroxx-dark-blue via-teroxx-dark-blue to-transparent p-4 md:hidden">
      <button
        onClick={onStart}
        className="w-full cta-button cta-button-primary text-base py-3 font-semibold"
      >
        Jetzt starten
      </button>
      <p className="text-center text-xs text-gray-400 mt-2">Nur 60 Sekunden - Kostenlos & Vertraulich</p>
    </div>
  )
}
