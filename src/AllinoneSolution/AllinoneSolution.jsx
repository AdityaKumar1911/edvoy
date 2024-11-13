import React from "react";
import { Sparkles, Language, Heart, PiggyBank, Send, Home } from "lucide-react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";

export default function Component() {
  return (
    <Box py={8} px={2} bgcolor="white">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          fontWeight="bold"
          color="#5D2DEF"
          textAlign="center"
          mb={4}
        >
          An all-in-one solution
        </Typography>

        <Grid container spacing={4}>
          {/* Course Matching */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <Sparkles
                size={48}
                color="#5D2DEF"
                style={{ marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Course matching
              </Typography>
              <Typography color="textSecondary">
                Use Genie, our AI-powered system to find courses with high
                admission prospects.
              </Typography>
            </Paper>
          </Grid>

          {/* Free IELTS Training */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  color: "#5D2DEF",
                  border: "2px solid #5D2DEF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 1,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                EN
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Free IELTS training
              </Typography>
              <Typography color="textSecondary">
                Join our free IELTS masterclass with live, virtual classes and
                expert insights.
              </Typography>
            </Paper>
          </Grid>

          {/* Easy Apply */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <Heart
                size={48}
                color="#5D2DEF"
                style={{ marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Easy apply
              </Typography>
              <Typography color="textSecondary">
                Filter, shortlist, apply, and pay to study your dream course
                with ease.
              </Typography>
            </Paper>
          </Grid>

          {/* Education Loan */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <PiggyBank
                size={48}
                color="#5D2DEF"
                style={{ marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Education loan
              </Typography>
              <Typography color="textSecondary">
                Get pre-approved loans in 48 hrs, expert consultation, and apply
                online with Edvoy Funds.
              </Typography>
            </Paper>
          </Grid>

          {/* Visa Application */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <Send
                size={48}
                color="#5D2DEF"
                style={{ marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Visa application
              </Typography>
              <Typography color="textSecondary">
                Get end-to-end guidance on your visa application from an expert.
              </Typography>
            </Paper>
          </Grid>

          {/* Accommodation Help */}
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2, height: 220 }}>
              <Home
                size={48}
                color="#5D2DEF"
                style={{ marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                mb={1}
              >
                Accommodation help
              </Typography>
              <Typography color="textSecondary">
                Find budget-friendly rooms near 700+ global cities, and get
                expert guidance with Edvoy Stays.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
