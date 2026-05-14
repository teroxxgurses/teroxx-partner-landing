'use client'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-teroxx-dark-blue to-transparent">
      <div className="h-1 bg-teroxx-blue/30">
        <div
          className="h-full bg-gradient-to-r from-teroxx-gold to-teroxx-light-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="px-4 py-3 flex items-center justify-between text-sm">
        <span className="text-teroxx-light-gold font-semibold">Schritt {currentStep + 1} von {totalSteps}</span>
        <span className="text-gray-400">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
