import { Box } from "@mui/material";
import React from "react";
import BodyFeedback from "./components/BodyFeedback";
import BodySubcribe from "./components/BodySubcribe";
import BodyVideo from "./components/BodyVideo";
import BoyContent from "./components/HCWH";
import HeroHeadline from "./components/HeroHeadline";
import Navbar from "./components/Navbar";
import BodyClient from "./components/OurClient";

function App() {
  return (
    <Box px="120px" sx={{ overflowX: "hidden" }}>
     <Box  mb="20px">
     <Navbar/>
     </Box>
      <Box mb="100px">
        <HeroHeadline />
      </Box>
      <Box mb="100px">
        <BodyClient />
      </Box>
      <Box mb="100px">
        <BoyContent />
      </Box>
      <Box  mb="200px">
        <BodyVideo />
      </Box>
      <Box mb="200px">
        <BodyFeedback />
      </Box>
      <Box>
        <BodySubcribe />
      </Box>
    </Box>
  );
}

export default App;
