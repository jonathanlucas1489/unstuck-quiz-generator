"use client"
import React from "react";
import {
  Stack,
  Typography,
  LinearProgress,
  Box,
  useTheme,
} from "@mui/material";
import { useQuizStore } from "../store/quizStore";
import Image from "next/image";
import PracticeQuestion from "../components/PracticeQuestion";
import resumeBackground from "../assets/resumeBackground.png";
import congratulations from "../assets/congratz.png";

const ResumePage: React.FC = () => {
  const theme = useTheme();
  const { questions, userAnswers } = useQuizStore();
  console.log('questions', questions)
  console.log('userAnswers', userAnswers)

  const correctAnswers = questions.reduce((count, q, idx) => {
    return q.answer === userAnswers[idx] ? count + 1 : count;
  }, 0);

  const totalQuestions = questions.length;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <Stack
      spacing={6}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f8f8fb"
      px={2}
      py={8}
    >
      <Box
        width="100%"
        maxWidth={600}
        py={10}
        px={4}
        borderRadius={4}
        textAlign="center"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundImage: `url(${resumeBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <Image
          src={congratulations}
          alt="Congratulations"
          width={70}
          height={70}
          style={{ marginBottom: 16 }}
        />

        <Typography variant="h5" fontWeight="bold" mb={2}>
          Great Work, you did very good on your quiz.
        </Typography>

        <Typography variant="h3" fontWeight="bold" color="#333">
          {correctAnswers}/{totalQuestions}
        </Typography>

        <Box mt={3} width="100%">
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: theme.palette.error.main,
              '& .MuiLinearProgress-bar': {
                backgroundColor: theme.palette.success.main,
              },
            }}
          />
        </Box>

        <Box display="flex" justifyContent="center" gap={4} mt={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              width={12}
              height={12}
              bgcolor={theme.palette.success.main}
              borderRadius={100}
            />
            <Typography variant="caption">Answered Correctly</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              width={12}
              height={12}
              bgcolor={theme.palette.error.main}
              borderRadius={100}
            />
            <Typography variant="caption">Missed Answers</Typography>
          </Box>
        </Box>
      </Box>

        {questions.map((question, index) => (
          <PracticeQuestion
            key={index}
            index={index}
            isReview
          />
        ))}
    </Stack>
  );
};

export default ResumePage;