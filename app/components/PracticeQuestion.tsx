"use client"
import React from "react"
import {
  Box,
  Typography,
  Radio,
  Stack,
} from "@mui/material"
import { useQuizStore } from "../store/quizStore"

interface PracticeQuestionProps {
  index: number
  isReview?: boolean;
}

const PracticeQuestion: React.FC<PracticeQuestionProps> = ({ index, isReview }) => {
  const { questions, userAnswers, setUserAnswer } = useQuizStore()
  const question = questions[index]
  const selected = userAnswers[index]

  const handleSelect = (option: string) => {
    if (selected || isReview) return
    setUserAnswer(index, option)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: 1,
        padding: 3,
        maxWidth: 600,
        mx: "auto",
        width: "100%"
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        {`Question ${index + 1}`}
      </Typography>
      <Typography
        variant="body1"
        mb={2}
        sx={{ backgroundColor: "#f2f2f2", padding: 2, borderRadius: 2 }}
      >
        {question.question}
      </Typography>

      <Stack spacing={1.5}>
        {question.options.map((option, i) => {
          const isSelected = selected === option
          const isCorrect = selected && option === question.answer
          const isIncorrect = selected && isSelected && option !== question.answer

          return (
            <Box
              key={i}
              onClick={() => handleSelect(option)}
              sx={{
                display: "flex",
                alignItems: "center",
                border: isSelected ? "2px solid #6D56FA" : "1px solid #e0e0e0",
                backgroundColor: isSelected ? "#6D56FA20" : "#f9f9f9",
                borderRadius: 3,
                px: 2,
                py: 1.5,
                cursor: selected ? "default" : "pointer",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Radio checked={isSelected} sx={{ color: "#6D56FA" }} />
                <Typography fontWeight={600}>{option}</Typography>
              </Stack>

              {isCorrect && (
                <Typography sx={{ color: "#22c55e", fontWeight: 600, fontSize: "0.9rem" }}>
                  ✓ Correct
                </Typography>
              )}

              {isIncorrect && (
                <Typography sx={{ color: "#ef4444", fontWeight: 600, fontSize: "0.9rem" }}>
                  ✗ Incorrect
                </Typography>
              )}
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default PracticeQuestion
