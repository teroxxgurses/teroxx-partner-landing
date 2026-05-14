'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import QualificationFlow from '@/components/QualificationFlow'
import ProgressBar from '@/components/ProgressBar'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formStarted, setFormStarted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStartQualification = () => {
    setFormStarted(true)
    setCurrentStep(0)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_type: 'form_start' })
    }
  }

  const handleFormComplete = (data: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { 
        content_type: 'form_submission',
        content_id: data.email 
      })
    }
    console.log('Form completed:', data)
  }

  return (
    <main className="w-full overflow-hidden">
      {formStarted && <ProgressBar currentStep={currentStep} totalSteps={5} />}

      {!formStarted && (
        <Hero onStartQualification={handleStartQualification} />
      )}

      {formStarted && (
        <QualificationFlow
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          onComplete={handleFormComplete}
        />
      )}

      {isMobile && !formStarted && (
        <StickyMobileCTA onStart={handleStartQualification} />
      )}
    </main>
  )
}
