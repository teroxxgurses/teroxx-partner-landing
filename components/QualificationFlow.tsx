'use client'

import { useState } from 'react'

interface QualificationFlowProps {
  currentStep: number
  onStepChange: (step: number) => void
  onComplete: (data: any) => void
}

const questions = [
  {
    id: 'name',
    label: 'Ihr Name',
    type: 'text',
    placeholder: 'Max Mustermann',
  },
  {
    id: 'email',
    label: 'E-Mail Adresse',
    type: 'email',
    placeholder: 'max@beispiel.de',
  },
  {
    id: 'experience',
    label: 'Jahre Erfahrung als Finanzberater?',
    type: 'select',
    options: [
      { value: '', label: 'Bitte auswählen' },
      { value: '0-2', label: '0-2 Jahre' },
      { value: '2-5', label: '2-5 Jahre' },
      { value: '5-10', label: '5-10 Jahre' },
      { value: '10+', label: '10+ Jahre' },
    ],
  },
  {
    id: 'digital_assets',
    label: 'Erfahrung mit Digital Assets?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Ja, habe ich' },
      { value: 'no', label: 'Nein, aber interessiert' },
    ],
  },
  {
    id: 'phone',
    label: 'Telefonnummer',
    type: 'tel',
    placeholder: '+49 123 456789',
  },
]

export default function QualificationFlow({
  currentStep,
  onStepChange,
  onComplete,
}: QualificationFlowProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const question = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleInputChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [question.id]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      onStepChange(currentStep + 1)
    } else {
      submitForm()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1)
    }
  }

  const submitForm = async () => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      onComplete(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFieldFilled = !!formData[question.id]

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-teroxx-blue to-teroxx-dark-blue flex items-center justify-center px-4 py-20 pt-32">
      <div className="w-full max-w-md mx-auto">
        {/* Question */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {question.label}
          </h2>
        </div>

        {/* Form Field */}
        <div className="mb-8 animate-fade-in-up animation-delay-200">
          {question.type === 'text' || question.type === 'email' || question.type === 'tel' ? (
            <input
              type={question.type}
              placeholder={question.placeholder}
              value={formData[question.id] || ''}
              onChange={e => handleInputChange(e.target.value)}
              className="form-input text-lg"
              autoFocus
            />
          ) : question.type === 'select' ? (
            <select
              value={formData[question.id] || ''}
              onChange={e => handleInputChange(e.target.value)}
              className="form-input text-lg"
              defaultValue=""
            >
              {question.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : question.type === 'radio' ? (
            <div className="space-y-3">
              {question.options?.map(option => (
                <label key={option.value} className="flex items-center p-4 rounded-lg border-2 border-teroxx-blue/30 cursor-pointer hover:border-teroxx-gold/50 transition-colors">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={formData[question.id] === option.value}
                    onChange={e => handleInputChange(e.target.value)}
                    className="w-4 h-4 mr-3"
                  />
                  <span className="text-white font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          ) : null}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 animate-fade-in-up animation-delay-300">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="flex-1 cta-button cta-button-secondary py-3"
              disabled={isSubmitting}
            >
              Zurück
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isFieldFilled || isSubmitting}
            className={`flex-1 cta-button py-3 font-semibold ${
              isFieldFilled && !isSubmitting
                ? 'cta-button-primary'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting
              ? 'Wird gesendet...'
              : currentStep === questions.length - 1
              ? 'Absenden'
              : 'Weiter'}
          </button>
        </div>
      </div>
    </section>
  )
}
