"use client"
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { QuestionData } from "../review/page";

interface QuestionProps {
  question: QuestionData;
  onAnswerChange: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswerChange }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: 1,
        padding: 3,
        marginBottom: 4,
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Typography variant="subtitle1" fontWeight="600" mb={1}>
        {`Question ${question.id}`}
      </Typography>
      <Typography
        variant="body1"
        mb={2}
        sx={{
          backgroundColor: "#f2f2f2",
          padding: 2,
          borderRadius: 2,
        }}
      >
        {question.question}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="body2" color="text.secondary" mb={1}>
        Multichoice Answers
      </Typography>

      <Stack spacing={1.5}>
        {question.options.map((option, index) => {
          const isCorrect = option === question.answer;
          return (
            <Box key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                height: '55px'
              }}
            >
              <Typography variant="body2" width={80}>{`Option ${index + 1}:`}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #e0e0e0",
                  borderRadius: 3,
                  px: 2,
                  py: 2,
                  cursor: "pointer",
                  width: '100%'
                }}
                onClick={() => onAnswerChange()}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight={600}>
                    {option}
                  </Typography>
                </Stack>
                {isCorrect && (
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: "#dcfce7",
                      borderRadius: 2,
                      color: "#22c55e",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    ✓ Correct Answer
                  </Box>
                )}
              </Box>
            </Box>

          );
        })}
      </Stack>
    </Box>
  );
};

export default Question;
