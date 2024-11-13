"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

export default function EventComponent() {
  const events = [
    {
      date: 8,
      month: "Nov",
      location: "Online",
      title: "Web Development Workshop",
      time: "10:00 am - 12:00 pm",
    },
    {
      date: 9,
      month: "Nov",
      location: "New York",
      title: "Marketing Strategies 101",
      time: "02:00 pm - 05:00 pm",
    },
    {
      date: 10,
      month: "Nov",
      location: "London",
      title: "Design Thinking Seminar",
      time: "09:00 am - 11:00 am",
    },
    {
      date: 11,
      month: "Nov",
      location: "Tokyo",
      title: "AI in Healthcare",
      time: "01:00 pm - 03:00 pm",
    },
    {
      date: 12,
      month: "Nov",
      location: "Sydney",
      title: "Blockchain Basics",
      time: "04:00 pm - 06:00 pm",
    },
    {
      date: 13,
      month: "Nov",
      location: "Berlin",
      title: "Introduction to IoT",
      time: "10:00 am - 11:30 am",
    },
    {
      date: 14,
      month: "Nov",
      location: "Online",
      title: "Data Science Bootcamp",
      time: "03:00 pm - 07:00 pm",
    },
    {
      date: 15,
      month: "Nov",
      location: "India",
      title: "Countdown to Campus Day",
      time: "03:00 pm - 04:00 pm",
    },
    {
      date: 16,
      month: "Nov",
      location: "Paris",
      title: "Digital Marketing Trends",
      time: "09:00 am - 12:00 pm",
    },
    {
      date: 17,
      month: "Nov",
      location: "San Francisco",
      title: "Startup Pitch Event",
      time: "05:00 pm - 07:00 pm",
    },
    {
      date: 18,
      month: "Nov",
      location: "Dubai",
      title: "Tech Expo 2024",
      time: "12:00 pm - 06:00 pm",
    },
    {
      date: 19,
      month: "Nov",
      location: "Singapore",
      title: "Future of Robotics",
      time: "11:00 am - 01:00 pm",
    },
    {
      date: 20,
      month: "Nov",
      location: "Toronto",
      title: "Cybersecurity Essentials",
      time: "02:00 pm - 05:00 pm",
    },
    {
      date: 21,
      month: "Nov",
      location: "Amsterdam",
      title: "Sustainable Energy Summit",
      time: "08:00 am - 10:30 am",
    },
    {
      date: 22,
      month: "Nov",
      location: "Mexico City",
      title: "Creative Leadership Workshop",
      time: "01:00 pm - 04:00 pm",
    },
    {
      date: 23,
      month: "Nov",
      location: "Rome",
      title: "Cultural Heritage Symposium",
      time: "09:30 am - 12:30 pm",
    },
    {
      date: 24,
      month: "Nov",
      location: "Moscow",
      title: "AI in Business Conference",
      time: "02:00 pm - 05:00 pm",
    },
    {
      date: 25,
      month: "Nov",
      location: "Beijing",
      title: "Big Data & Analytics Summit",
      time: "10:00 am - 04:00 pm",
    },
    {
      date: 26,
      month: "Nov",
      location: "Seoul",
      title: "Innovation in Tech",
      time: "03:00 pm - 06:00 pm",
    },
    {
      date: 27,
      month: "Nov",
      location: "Bangkok",
      title: "Finance & Technology Meet",
      time: "10:30 am - 01:30 pm",
    },
    {
      date: 28,
      month: "Nov",
      location: "Los Angeles",
      title: "Media & Entertainment Expo",
      time: "04:00 pm - 08:00 pm",
    },
    {
      date: 29,
      month: "Nov",
      location: "Rio de Janeiro",
      title: "Sports Technology Forum",
      time: "09:00 am - 12:00 pm",
    },
    {
      date: 30,
      month: "Nov",
      location: "Cape Town",
      title: "Green Tech Conference",
      time: "11:00 am - 03:00 pm",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(15);
  const scrollRef = useRef(null);

  const selectedEvent = events.find((event) => event.date === selectedDate);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <Typography variant="h2" align="center" gutterBottom>
          Upcoming events
        </Typography>
        <div className="relative">
          <IconButton
            color="primary"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={() => scroll("left")}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            color="primary"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onClick={() => scroll("right")}
          >
            <ChevronRight />
          </IconButton>
          <Box
            ref={scrollRef}
            display="flex"
            padding={2}
            overflow="auto"
            sx={{
              scrollBehavior: "smooth",
              overflowX: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {events.map((event) => (
              <Box
                key={event.date}
                sx={{
                  cursor: "pointer",
                  minWidth: 100,
                  textAlign: "center",
                  p: 2,
                  borderRadius: 1,
                  backgroundColor:
                    selectedDate === event.date ? "#5D2B8C" : "grey.100",
                  color:
                    selectedDate === event.date ? "white" : "text.secondary",
                }}
                onClick={() => setSelectedDate(event.date)}
              >
                <Typography variant="h5" component="div">
                  {event.date}
                </Typography>
                <Typography variant="caption">{event.month}</Typography>
              </Box>
            ))}
          </Box>
        </div>

        {selectedEvent && selectedEvent.title && (
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={2}
              >
                <Box bgcolor="#5D2B8C" color="white" p={2} flex={1}>
                  <Typography variant="body2">
                    {selectedEvent.location}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {selectedEvent.time}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {selectedEvent.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      bgcolor: "white",
                      color: "#5D2B8C",
                      "&:hover": { bgcolor: "grey.100" },
                    }}
                  >
                    View Details
                  </Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#1a1a1a"
                  p={2}
                  flex={1}
                >
                  <Typography variant="h5" color="white">
                    Countdown to Campus Day
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
