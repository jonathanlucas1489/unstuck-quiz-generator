"use client"
import Image from "next/image";
import { Stack, Typography, Zoom } from "@mui/material";
import loadingImage from "@/app/assets/loadingImage.png";
import { useInView } from "react-intersection-observer";

interface LoadingProps {
  title: string;
  subtitle: string;
}

export default function Loading({title, subtitle}: LoadingProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

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
      <Zoom in={inView} timeout={500}>
        <Image src={loadingImage} alt="Generating" width={260} height={260} />
      </Zoom>
      <Zoom in={inView} timeout={500}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="h6" fontWeight="600" color="#1a1a1a">
            {title}
          </Typography>
          <Typography variant="body2" color="#666">
            {subtitle}  
          </Typography>
        </Stack>
      </Zoom>
    </Stack>
  );
}