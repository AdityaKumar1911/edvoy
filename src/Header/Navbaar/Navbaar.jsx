import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbaar.css";

export default function Header() {
  const [coursesHovered, setCoursesHovered] = useState(false);
  const [countriesHovered, setCountriesHovered] = useState(false);

  const topCourses = [
    {
      name: "MSc Advanced Computer Science with Business",
      university: "University of Exeter",
    },
    {
      name: "MSc (PGCert PGDip) Data Analytics",
      university: "University of Brighton",
    },
    {
      name: "MSc Advanced Computer Science",
      university: "University of Liverpool",
    },
    { name: "MSc Health Research Methods", university: "University of Exeter" },
    {
      name: "MSc/PGDip/PGCert Computing Science",
      university: "University of Glasgow",
    },
    {
      name: "MSc Finance and Accounting",
      university: "University of Brighton",
    },
    {
      name: "LLM International Business Law",
      university: "University of Bolton",
    },
  ];

  const popularSubjects = [
    "Computer Sciences",
    "Artificial Intelligence",
    "Business",
    "Cyber Security",
    "Health care",
    "Data Sciences and Big Data",
    "Finance",
    "Emergency Medicine",
    "Business Administration",
    "Engineering And Technology",
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Grenada", flag: "🇬🇩" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Germany", flag: "🇩🇪" },
  ];

  return (
    <header
      style={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
        }}
      >
        <Typography variant="h6" color="primary">
          EduConnect
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search courses, subjects..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "300px" }}
        />

        <nav style={{ display: "flex", gap: "24px" }}>
          <div
            onMouseEnter={() => setCoursesHovered(true)}
            onMouseLeave={() => setCoursesHovered(false)}
          >
            <Button
              endIcon={
                <ChevronDown
                  className={`rotate-icon ${coursesHovered ? "rotate" : ""}`}
                />
              }
              color="inherit"
              style={{ textTransform: "none", color: "#4B5563" }}
            >
              Courses
            </Button>
            {coursesHovered && (
              <Box
                sx={{
                  position: "absolute",
                  width: 600,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 1,
                  padding: 2,
                  zIndex: 10,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ width: "50%", pr: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Top Courses
                    </Typography>
                    <ul>
                      {topCourses.map((course, index) => (
                        <li key={index}>
                          <Typography variant="body2" color="textPrimary">
                            <strong>{course.name}</strong>
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {course.university}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <Button variant="text" color="primary" size="small">
                      See all →
                    </Button>
                  </Box>
                  <Box sx={{ width: "50%", pl: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Popular Subjects
                    </Typography>
                    <ul
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px",
                      }}
                    >
                      {popularSubjects.map((subject, index) => (
                        <li key={index}>
                          <Typography variant="body2" color="textPrimary">
                            {subject}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <Button variant="text" color="primary" size="small">
                      See all →
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </div>

          <div
            onMouseEnter={() => setCountriesHovered(true)}
            onMouseLeave={() => setCountriesHovered(false)}
          >
            <Button
              endIcon={
                <ChevronDown
                  className={`rotate-icon ${countriesHovered ? "rotate" : ""}`}
                />
              }
              color="inherit"
              style={{ textTransform: "none", color: "#4B5563" }}
            >
              Countries
            </Button>
            {countriesHovered && (
              <Box
                sx={{
                  position: "absolute",
                  // mt: 2,
                  // width: 300,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 1,
                  zIndex: 10,
                  padding: 2,
                }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  Top Institutions In
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                  }}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index}>
                      <span style={{ marginRight: "8px" }}>{country.flag}</span>
                      {country.name}
                    </MenuItem>
                  ))}
                </Box>
              </Box>
            )}
          </div>

          <Button
            color="inherit"
            style={{ textTransform: "none", color: "#4B5563" }}
          >
            About
          </Button>
        </nav>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button variant="outlined" color="primary">
            Log in
          </Button>
          <Button variant="contained" color="primary">
            Sign up
          </Button>
        </Box>
      </Box>
    </header>
  );
}
