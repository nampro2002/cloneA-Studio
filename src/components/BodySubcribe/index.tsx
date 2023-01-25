import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { bgcolor, width } from "@mui/system";
import React from "react";
import { transform } from "typescript";

function BodySubcribe() {
  return (
    <Box
      height="292px"
      bgcolor="#F4F9FF"
      display="flex"
      justifyContent="space-between"
      borderRadius="80px"
      px="80px"
      position='relative'
    >
      <Box alignSelf="center">
        <Typography
          variant="h4"
          mb="20px"
          gutterBottom
          fontSize="40px"
          fontWeight="500"
        >
          Subscribe Newsletter
        </Typography>
        <Typography
          variant="body1"
          mb="30px"
          align="left"
          width="450px"
          fontSize="17px"
        >
          I will update good news and promotion service not spam
        </Typography>
      </Box>
      <Box position="relative" alignSelf="center" zIndex="2">
        <input
          placeholder="Enter your email address.."
          style={{
            width: "410px",
            padding: "35px",
            border: "none",
            fontSize: "17px",
            borderRadius: "80px",
          }}
        />
        <Button
          sx={{
            color: "white",
            bgcolor: "#2639ED",
            padding: "20px",
            borderRadius: "80px",
            position: "absolute",
            width: "160px",
            right: "15px",
            top: "13%",
          }}
          variant="contained"
        >
          Contact Now
        </Button>
        <Box
          position="absolute"
          width="443px"
          height="292px"
          bgcolor="#2639ED"
          sx={{
            right: "-17%",
            bottom: "-113%",
            zIndex: "-1",
            borderRadius: "83px",
          }}
        ></Box>
        <Box
          position="absolute"
          width="240px"
          height="294px"
          //   bgcolor="#2639ED"
          bgcolor="#2639ED"
          sx={{
            right: "33%",
            bottom: "-111%",
            zIndex: "-1",
            borderTopLeftRadius: "140px",
            borderTopRightRadius: "140px",
            borderBottomLeftRadius: "125px",
            transform: "rotate(329deg)",
          }}
        ></Box>
      </Box>
      <Box
              position="absolute"
              width="178px"
              height="178px"
              bgcolor="#FFF5DB"              
              sx={{
                left: "-3%",
                bottom: "-10%",
                zIndex: "-1",
                borderBottomLeftRadius: "55%",
              }}
            ></Box>
             <Box
            zIndex="-2"
            position="absolute"
            sx={{ top: "-20%", right: "-17%" }}
          >
            <img
              src="/imgs/Ornamentdotblue.png"
              alt=""
              width="404px"
              height="154px"
            />
          </Box>
    </Box>
  );
}

export default BodySubcribe;
