import { useMutation } from '@tanstack/react-query'

export function useGenerateQuiz() {
  return useMutation({
    mutationFn: async (pdf: File) => {
      const formData = new FormData()
      formData.append('file', pdf)

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-questions`, {
        method: 'POST',
        body: formData,
      })


      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || 'Failed to generate quiz')
      }

      const data = await res.json()
      console.log('res', data)
      return data.questions
    },
  })
}