import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import WordSlider from "./Content-comps/WordSlider";



const contentTypes = [
  "Fun",
  "Education",
  "Sports",
  "News",
  "Investments",
  "Facts",
];
const options = {
  Fun: [
    "Board Game Revival",
    "Comedy Trends",
    "Amusement Parks",
    "Escape Rooms",
    "Street Performances",
    "Online Challenges",
    "Festival Impact",
    "Crafting Movements",
    "Social Gambling",
    "Virtual Reality",
  ],
  Education: [
    "Gamified Learning",
    "Education System",
    "Bilingual benefits",
    "Standardized testing",
    "Art in Schools",
    "Tech bootcamps",
    "Homeschooling dynamics",
    "Mentorship Importance",
    "Edcational Equity",
    "Mobile Learning",
  ],
  Sports: [
    "Sports medicine",
    "Team sociology",
    "Olympic economics",
    "Gender parity",
    "Fandom psychology",
    "Extreme sports",
    "Sports business",
    "Youth athletics",
    "Data analytics",
    "Doping ethics",
  ],
  News: [
    "Citizen journalism",
    "Whistleblower influence",
    "Fake news",
    "Print media survival",
    "Social media news",
    "Cybersecurity news",
    "Democratic media",
    "News deserts",
    "News economics",
    "Broadcast evolution",
  ],
  Investments: [
    "Robo-advising",
    "Geopolitical impacts",
    "Index funds",
    "Real estate trends",
    "Startup investing",
    "Social trading",
    "Tax strategies",
    "Emerging markets",
    "Financial literacy",
    "Pension futures",
  ],
  Facts: [
    "Animal oddities",
    "Everyday science",
    "Historical obscurities",
    "Science myths",
    "Human body facts",
    "Oceanic discoveries",
    "Space exploration",
    "Ancient tech",
    "World laws",
    "Bizarre news",
  ],
};

export default function ContentType() {
  const [type, setType] = useState();
  

  
  useEffect(() => {
    // This will log the updated value of type whenever it changes
    console.log(type);
  }, [type]);

  const handleClick = (contentType) => {
    setType(contentType);
  };

  const defaultProps = {
    options: options[type] || [], // Set options based on the selected type
    getOptionLabel: (option) => option, // Function to get the label for each option
  };

  return (
    <section>
      <h2>Content Type</h2>
      <p>Choose that best fit your needs</p>
      <hr />
      <h3>What type of content are you creating?</h3>
      <Stack direction="row" spacing={1}>
        {contentTypes.map((contentType, index) => (
          <Chip
            key={index}
            name={contentType}
            label={contentType}
            variant="outlined"
            onClick={() => handleClick(contentType)}
          />
        ))}
      </Stack>
      <hr />
      {type && (
        <>
          <h3>Which kind of "{type}" content do you want to discuss?</h3>
          <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
              {...defaultProps}
              id="include-input-in-list"
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label="Search" variant="standard" />
              )}
            />
          </Stack>
        </>
      )}
       <WordSlider />
    </section>
  );
}
