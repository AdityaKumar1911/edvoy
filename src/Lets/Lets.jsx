import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

export default function Component() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: 400,
        // background: "linear-gradient(to bottom, white, #f3e5f5, #e1bee7)",
        py: { xs: 8, md: 12, lg: 16 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "bold",
            color: "#5D2B8C",
            maxWidth: 700,
            lineHeight: 1.2,
          }}
        >
          Let&apos;s turn your study-abroad dream into a reality
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#5D2B8C",
            color: "white",
            paddingX: 4,
            paddingY: 2,
            fontSize: "1.125rem",
            borderRadius: 999,
            "&:hover": { backgroundColor: "#4D2473" },
          }}
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up for free
        </Button>
      </Container>
    </Box>
  );
}
