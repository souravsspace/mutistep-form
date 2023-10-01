import { ReactElement, useState } from "react"

type useMultistepProps = {
  title: string
  steps: ReactElement[]
}

export default function useMultistep({ title, steps }: useMultistepProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev === steps.length - 1) return prev
      return prev + 1
    })
  }

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev
      return prev - 1
    })
  }

  return {
    title,
    steps,
    step: steps[currentStepIndex],
    currentStepIndex,
    next,
    back,
    isFirstPage: currentStepIndex === 0,
    isLastPage: currentStepIndex === steps.length - 1,
  }
}
