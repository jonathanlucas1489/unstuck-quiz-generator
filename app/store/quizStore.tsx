import { create } from 'zustand'

type Question = {
    question: string
    options: string[]
    answer: string;
}

type QuizState = {
    questions: Question[]
    userAnswers: Record<number, string>
    setUserAnswer: (questionId: number, answer: string) => void
    setQuestions: (questions: Question[]) => void
    reset: () => void
}

export const useQuizStore = create<QuizState>((set) => ({
    questions: [],
    userAnswers: {},
    setUserAnswer: (questionId, answer) =>
        set((state) => ({
            userAnswers: {
                ...state.userAnswers,
                [questionId]: answer,
            },
        })),
    setQuestions: (questions) => set({ questions }),
    reset: () => set({ questions: [] }),
}))
