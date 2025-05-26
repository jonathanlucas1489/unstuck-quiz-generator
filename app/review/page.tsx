"use client"
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/logo.png";
import Question from "../components/Question";
import { useQuizStore } from "../store/quizStore";

export interface QuestionData {
  id: number;
  question: string;
  options: string[];
  answer: string;
}


const ReviewQuestionsPage: React.FC = () => {
  const router = useRouter();
  const questions = useQuizStore((state) => state.questions);
  const setQuestions = useQuizStore((state) => state.setQuestions);

  const handleAnswerChange = (questionIndex: number) => {
    const updated = [...questions];
    updated[questionIndex] = {
      ...updated[questionIndex],
      answer: updated[questionIndex].answer,
    };
    setQuestions(updated);
  };

  const handleStartQuiz = () => {
    router.push("/practice");
  };

  return (
    <Box sx={{ backgroundColor: "#f8f8fb", height: "100vh", display: "flex", flexDirection: "column" }}>
      <Stack direction="row" alignItems="center" spacing={1} mb={4} pt={6}>
        <IconButton onClick={() => router.push("/")}>
          <ArrowBackIcon sx={{ color: "#6c47ff" }} />
        </IconButton>
        <Image src={logo} alt="Logo" width={24} height={24} />
        <Typography variant="h5" fontWeight="600">
          Review questions
        </Typography>
      </Stack>
      <Container maxWidth="md" sx={{ flex: 1, overflowY: "auto", pb: 10 }}>
        {questions.map((q, index) => (
          <Question
            key={index}
            question={{ ...q, id: index + 1 }}
            onAnswerChange={() => handleAnswerChange(index)}
          />
        ))}
      </Container>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "linear-gradient(to top, #f8f8fb 80%, transparent)",
          paddingBottom: "70px",
          py: 3,
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6c47ff",
            borderRadius: 2,
            paddingX: 6,
            paddingY: 1.5,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "none",
            ":hover": {
              backgroundColor: "#5a3ad0",
            },
          }}
          onClick={() => handleStartQuiz()}
        >
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewQuestionsPage;
