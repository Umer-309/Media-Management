import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 1000,
    label: "1000",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function WordSlider() {
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 390,
        bgcolor: "#09090D",
        borderRadius: 2,
        padding: 2,
        marginY: 2,
      }}
      className="slider"
    >
      <Typography sx={{ color: "white" }}>
        Set the number of words for output text.
      </Typography>
      <Slider
        aria-label="Always visible"
        defaultValue={sliderValue}
        getAriaValueText={valuetext}
        min={100}
        max={1000}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        sx={{
          "& .MuiSlider-track": {
            background: 'linear-gradient(to right, #523FD7, #FF7DFF)', // Set your gradient colors
          },
          "& .MuiSlider-markLabel": {
            color: "white",
            marginTop: "-10px", // Adjust as needed
          },
        }}
      />
    </Box>
  );
}