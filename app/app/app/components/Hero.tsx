'use client'

import { useState, useEffect } from 'react'

interface HeroProps {
  onStartQualification: () => void
}

const trustSignals = [
  { icon: '✓', text: 'Nur 60 Sekunden' },
  { icon: '🔒', text: 'Datenschutz garantiert' },
  { icon: '⭐', text: '500+ Partner' },
]

export default function Hero({ onStartQualification }: HeroProps) {
  const [animateElements, setAnimateElements] = useState(false)

  useEffect(() => {
    setAnimateElements(true)
  }, [])

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-teroxx-dark-blue via-teroxx-blue to-teroxx-dark-blue flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teroxx-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teroxx-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto relative z-10">
        {/* Main Headline */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Finanzberater?
          </h1>
          <h2 className="text-2xl md:text-3xl text-teroxx-light-gold font-semibold mb-6">
            Prüfen Sie in 60 Sekunden Ihre Qualifikation
          </h2>
        </div>

        {/* Subheadline */}
        <div
          className={`text-center mb-8 transition-all duration-700 delay-200 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Als moderne Digital Asset Boutique suchen wir qualifizierte Partner. Finden Sie heraus, ob Sie der richtige Fit sind.
          </p>
        </div>

        {/* Trust Signals */}
        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-6 mb-10 transition-all duration-700 delay-300 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teroxx-dark-blue/50 border border-teroxx-gold/30 backdrop-blur-sm"
            >
              <span className="text-teroxx-light-gold text-xl">{signal.icon}</span>
              <span className="text-white font-medium">{signal.text}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA Button */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
            animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={onStartQualification}
            className="cta-button cta-button-primary text-lg px-8 py-4 shadow-2xl hover:shadow-teroxx-gold/50"
          >
            Partnerqualifikation starten
          </button>
          <button className="cta-button cta-button-secondary text-lg px-8 py-4">
            Mehr erfahren
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teroxx-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-teroxx-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
