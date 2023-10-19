import { create } from 'zustand'

import { FormStepId } from '@/types'

interface useCurrentStepIdStore {
  currentStepId: FormStepId
  setCurrentStepId: (stepId: FormStepId) => void
}

export const useCurrentStepId = create<useCurrentStepIdStore>((set) => ({
  currentStepId: 'WELCOME_PAGE',
  setCurrentStepId: (stepId) => set({ currentStepId: stepId }),
}))
