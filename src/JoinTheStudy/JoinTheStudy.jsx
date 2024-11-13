import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";

export default function Component() {
  return (
    <Box py={8} px={2} sx={{ bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" fontWeight="bold" color="#5D2DEF" mb={2}>
            Join the study-abroad revolution
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            maxWidth="md"
            mx="auto"
          >
            Leveraging seamless technology and a global network, Edyoy is your
            one-stop solution for international education
          </Typography>
        </Box>

        <Grid container spacing={3} mb={6}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3" fontWeight="bold" color="#5D2DEF" mb={1}>
                85K+
              </Typography>
              <Typography color="textSecondary">students empowered</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3" fontWeight="bold" color="#5D2DEF" mb={1}>
                16+
              </Typography>
              <Typography color="textSecondary">years of experience</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3" fontWeight="bold" color="#5D2DEF" mb={1}>
                600+
              </Typography>
              <Typography color="textSecondary">
                institution partners
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3" fontWeight="bold" color="#5D2DEF" mb={1}>
                4.7/5
              </Typography>
              <Typography color="textSecondary">Google rating</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3" fontWeight="bold" color="#5D2DEF" mb={1}>
                15+
              </Typography>
              <Typography color="textSecondary">global offices</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
