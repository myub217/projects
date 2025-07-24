// src/components/ui/Stepper.tsx
// ✅ Accessible Stepper component with keyboard navigation, Tailwind + DaisyUI styling, and responsive layout

import React, { KeyboardEvent } from 'react'
import clsx from 'clsx'

interface Step {
  id: string | number
  label: string
  description?: string
}

interface StepperProps {
  steps: Step[]
  currentStep: number
  onStepChange?: (stepIndex: number) => void
  className?: string
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepChange, className }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!onStepChange) return

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        if (index < steps.length - 1) onStepChange(index + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        if (index > 0) onStepChange(index - 1)
        break
      case 'Home':
        e.preventDefault()
        onStepChange(0)
        break
      case 'End':
        e.preventDefault()
        onStepChange(steps.length - 1)
        break
      default:
        break
    }
  }

  return (
    <nav
      aria-label="Progress"
      className={clsx('flex flex-col sm:flex-row sm:space-x-4', className)}
    >
      {steps.map((step, index) => {
        const isCurrent = index === currentStep
        const isCompleted = index < currentStep

        return (
          <button
            key={step.id}
            type="button"
            aria-current={isCurrent ? 'step' : undefined}
            onClick={() => onStepChange && onStepChange(index)}
            onKeyDown={e => handleKeyDown(e, index)}
            className={clsx(
              'group flex flex-col items-center justify-center rounded-md border px-4 py-2 text-center transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              isCurrent
                ? 'border-primary bg-primary font-semibold text-white shadow'
                : 'border-base-300 bg-base-100 text-base-content hover:bg-base-200',
              isCompleted && !isCurrent && 'text-primary'
            )}
          >
            <span className="text-sm">{step.label}</span>
            {step.description && (
              <span className="mt-1 text-xs text-base-content/70">{step.description}</span>
            )}
          </button>
        )
      })}
    </nav>
  )
}

export default Stepper
