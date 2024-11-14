import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { ChevronDown } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbaar.css";

export default function Header() {
  const [coursesHovered, setCoursesHovered] = useState(false);
  const [countriesHovered, setCountriesHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const topCourses = [
    {
      name: "MSc Advanced Computer Science with Business",
      university: "University of Exeter",
    },
    {
      name: "MSc (PGCert PGDip) Data Analytics",
      university: "University of Brighton",
    },
    // ... more courses
  ];

  const popularSubjects = [
    "Computer Sciences",
    "Artificial Intelligence",
    "Business",
    // ... more subjects
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Ireland", flag: "🇮🇪" },
    // ... more countries
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <header
      style={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        padding: "8px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="primary">
          EduConnect
        </Typography>

        {!isMobile && (
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
        )}

        {isMobile ? (
          <IconButton onClick={toggleDrawer(true)} edge="end">
            <MenuIcon />
          </IconButton>
        ) : (
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
                    mt: 1,
                  }}
                >
                  {/* Top Courses and Subjects */}
                </Box>
              )}
            </div>
            {/* Countries Dropdown */}
            <div
              onMouseEnter={() => setCountriesHovered(true)}
              onMouseLeave={() => setCountriesHovered(false)}
            >
              <Button
                endIcon={
                  <ChevronDown
                    className={`rotate-icon ${
                      countriesHovered ? "rotate" : ""
                    }`}
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
                    backgroundColor: "white",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: 1,
                    zIndex: 10,
                    padding: 2,
                    mt: 1,
                  }}
                >
                  {/* Countries List */}
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
        )}

        <Box sx={{ display: isMobile ? "none" : "flex", gap: "16px" }}>
          <Button variant="outlined" color="primary">
            Log in
          </Button>
          <Button variant="contained" color="primary">
            Sign up
          </Button>
        </Box>
      </Box>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Button onClick={toggleDrawer(false)}>Close</Button>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Button color="inherit" style={{ textTransform: "none" }}>
              Courses
            </Button>
            <Button color="inherit" style={{ textTransform: "none" }}>
              Countries
            </Button>
            <Button color="inherit" style={{ textTransform: "none" }}>
              About
            </Button>
            <Button variant="outlined" color="primary">
              Log in
            </Button>
            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Box>
        </Box>
      </Drawer>
    </header>
  );
}
