"use client"
import React, { useState } from "react"
import {
  Stack,
  Button,
  Slide,
  useTheme,
} from "@mui/material"
import PracticeQuestion from "../components/PracticeQuestion"
import { useQuizStore } from "../store/quizStore"
import { useRouter } from "next/navigation";

const PracticePage: React.FC = () => {
  const router = useRouter();

  const theme = useTheme()
  const { questions } = useQuizStore()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left")
  const [show, setShow] = useState(true)

  const handleNavigate = (nextIndex: number, direction: "left" | "right") => {
    setSlideDirection(direction)
    setShow(false)

    setTimeout(() => {
      setCurrentIndex(nextIndex)
      if (direction == 'left') {
        setSlideDirection('right')
      } else {
        setSlideDirection('left')
      }
      setShow(true)
    }, 300)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      handleNavigate(currentIndex + 1, "right")
    } else {
      router.push("/resume");

    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleNavigate(currentIndex - 1, "left")
    }
  }

  return (
    <Stack
      p={4}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f8f8fb"
    >
      <Slide
        direction={slideDirection}
        in={show}
        timeout={300}
        easing={{
          enter: theme.transitions.easing.easeOut,
          exit: theme.transitions.easing.sharp,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div key={currentIndex}>
          <PracticeQuestion index={currentIndex} />
        </div>
      </Slide>

      <Stack
        direction="row"
        justifyContent="space-between"
        mt={4}
        width="100%"
        maxWidth={550}
      >
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          sx={{ borderRadius: 3, width: "100px" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            borderRadius: 3,
            backgroundColor: "#6D56FA",
            width: "100px",
          }}
        >
          {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Stack>
    </Stack>
  )
}

export default PracticePage