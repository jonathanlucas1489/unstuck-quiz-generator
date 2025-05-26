"use client"
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useQuizStore } from "@/app/store/quizStore";

import {
  Stack,
  Typography,
  Box,
  Zoom,
} from "@mui/material";
import Image from "next/image";
import pdfImage from "@/app/assets/pdfImage.png";
import logo from "@/app/assets/logo.png";
import { useGenerateQuiz } from "./api/quizGenerator";
import Loading from "./components/Loading";

export default function Home() {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.6 });
  const { mutateAsync, isPending } = useGenerateQuiz();
  const setQuestions = useQuizStore((state) => state.setQuestions);

  const handleUploadClick = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const questions = await mutateAsync(file);
        setQuestions(questions);
        router.push("/review");
      } catch (err) {
        alert(err || "Erro ao gerar quiz");
      }
    };
  };

  if (isPending) {
    return <Loading title="Generating Quiz Questions" subtitle="Reading your materials..." />
  }

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f8f8fb"
      textAlign="center"
      ref={ref}
    >
      <Stack spacing={1} alignItems="center">
        <Stack spacing={1} alignItems="center" direction="row">
          <Image src={logo} alt="Unstuck Logo" width={30} height={30} />
          <Typography variant="h5" fontWeight="600" color="#1a1a1a">
            Unstuck Quiz Generator
          </Typography>
        </Stack>

        <Typography variant="body1" color="#666">
          Generate quiz quiz your course materials, or textbooks to
          <br /> help you study faster and smarter.
        </Typography>
      </Stack>

      <Zoom in={inView} timeout={500}>
        <Box
          sx={{
            border: "2px dashed #e0e0e0",
            borderRadius: 3,
            padding: 5,
            backgroundColor: "white",
            maxWidth: 480,
            width: "100%",
            cursor: "pointer",
          }}
          onClick={handleUploadClick}
        >
          <Stack spacing={2} alignItems="center">
            <Image src={pdfImage} alt="PDF Upload" width={100} height={100} />
            <Typography variant="body1">
              <Box component="span" fontWeight="600" color="#6c47ff">
                Click to upload
              </Box>{" "}
              or drag and drop files
            </Typography>
            <Typography variant="caption" color="#999">
              Drop Course Materials and start generating – for <strong>FREE</strong>
            </Typography>
          </Stack>
        </Box>
      </Zoom>
    </Stack>
  );
}
