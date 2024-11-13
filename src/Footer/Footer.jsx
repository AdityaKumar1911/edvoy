import React from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#E2EAF4"
      color="#333"
      py={6}
      px={{ xs: 2, md: 8 }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#333">
            About Edvoy
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Edvoy is a digital platform helping students worldwide find the best
            educational opportunities.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#333">
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column">
            {[
              "How it Works",
              "Universities",
              "Scholarships",
              "FAQs",
              "Contact Us",
            ].map((link, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  color: "textSecondary",
                  mb: 1,
                  "&:hover": { color: "#0056b3" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#333">
            Our Services
          </Typography>
          <Box display="flex" flexDirection="column">
            {[
              "Student Counseling",
              "Visa Assistance",
              "Accommodation Help",
              "Application Guidance",
              "Financial Advice",
            ].map((service, index) => (
              <Link
                key={index}
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  color: "textSecondary",
                  mb: 1,
                  "&:hover": { color: "#0056b3" },
                }}
              >
                {service}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#333">
            Follow Us
          </Typography>
          <Box display="flex" gap={1}>
            {[
              { icon: <Facebook />, href: "#" },
              { icon: <Twitter />, href: "#" },
              { icon: <Instagram />, href: "#" },
              { icon: <LinkedIn />, href: "#" },
            ].map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                sx={{ color: "textSecondary", "&:hover": { color: "#0056b3" } }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ bgcolor: "grey.300", my: 4 }} />

      {/* Bottom Disclaimer */}
      <Box textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Edvoy. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
