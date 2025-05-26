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
    questions: [
        {
            "question": "What is the current position of Jonathan Lucas Feitosa de Morais?",
            "options": [
                "Junior Software Developer",
                "Full Stack Developer",
                "Software Engineer",
                "Full Stack Software Engineer"
            ],
            "answer": "Full Stack Software Engineer"
        },
        {
            "question": "Where is Jonathan Lucas Feitosa de Morais currently working?",
            "options": [
                "Rei do pitaco",
                "Spocket",
                "Scale System (DiviHub)",
                "LW Sistemas"
            ],
            "answer": "Spocket"
        },
        {
            "question": "What technologies did Jonathan Lucas Feitosa de Morais use to develop applications at Spocket?",
            "options": [
                "Django and NextJs",
                "React and NextJs",
                "Django and Python",
                "React and Python"
            ],
            "answer": "Django and NextJs"
        },
        {
            "question": "What was one of the responsibilities of Jonathan Lucas Feitosa de Morais at Rei do pitaco?",
            "options": [
                "Integrated real time progress feedback",
                "Developed applications integrated with Shopify and Stripe",
                "Led A/B tests and experiments using Statsig",
                "Deployed infrastructures to new projects using AWS"
            ],
            "answer": "Led A/B tests and experiments using Statsig"
        },
        {
            "question": "Which company did Jonathan Lucas Feitosa de Morais work for as a Full Stack Developer?",
            "options": [
                "Spocket",
                "Rei do pitaco",
                "Scale System (DiviHub)",
                "LW Sistemas"
            ],
            "answer": "Scale System (DiviHub)"
        },
        {
            "question": "What was one of the projects Jonathan Lucas Feitosa de Morais worked on at Rei do Pitacos?",
            "options": [
                "Developed a new home with a video player",
                "Built a KYC system with MostQI document recognition",
                "Created a back-office feature to manage app version control",
                "Developed a React front-end for a cryptocurrency exchange platform"
            ],
            "answer": "Created a back-office feature to manage app version control"
        },
        {
            "question": "Which technology did Jonathan Lucas Feitosa de Morais use in the Pix Payment project at DiviHub?",
            "options": [
                "React Native",
                "Python",
                "React",
                "NextJs"
            ],
            "answer": "React Native"
        },
        {
            "question": "What was Jonathan Lucas Feitosa de Morais's position at LW Sistemas?",
            "options": [
                "Junior Software Developer",
                "Full Stack Developer",
                "Software Engineer",
                "Full Stack Software Engineer"
            ],
            "answer": "Junior Software Developer"
        },
        {
            "question": "What degree did Jonathan Lucas Feitosa de Morais earn from Universidade Federal de Campina Grande?",
            "options": [
                "Bachelor in Computer Science",
                "Master in Computer Science",
                "Bachelor in Software Engineering",
                "Master in Software Engineering"
            ],
            "answer": "Bachelor in Computer Science"
        },
        {
            "question": "What is Jonathan Lucas Feitosa de Morais's email address?",
            "options": [
                "jonathan.morais@ccc.ufcg.edu.br",
                "jonathan.morais@gmail.com",
                "jonathan.morais@spocket.com",
                "jonathan.morais@reidopitaco.com"
            ],
            "answer": "jonathan.morais@ccc.ufcg.edu.br"
        }
    ],
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
