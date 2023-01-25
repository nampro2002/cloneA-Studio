import { Box, Grid, Typography, styled, ThemeProvider } from "@mui/material";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { textAlign } from "@mui/system";
function BoyContent() {
  const StyledBox = styled(Box)(() => ({
    width: "308px",
    height: "379px",
    // backgroundColor:'#f6f6f6',
    borderRadius: "35px",
    border: "1px solid #edeaea",
    textAlign: "center",
    backgroundColor: "#fff",
  }));
  return (
    <Box display="flex" justifyContent="space-between" position="relative">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          position="relative"
          // display="flex"
          // flex-direction="column"
          // justify-content="center"
        >
          <Typography
            variant="h4"
            mb="20px"
            gutterBottom
            width="330px"
            fontWeight="500"
          >
            How can we help your Business ?
            <Typography variant="body1" mt="20px" align="left" width="390px">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </Typography>
          </Typography>
          <Box
            width="178px"
            height="178px"
            position="absolute"
            bgcolor="#FFF5DB"
            sx={{
              left: "-19%",
              top: "-50%",
              zIndex: "-1",
              borderTopLeftRadius: "55%",
            }}
          ></Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box position="relative">
          <Box
            width="2047px"
            height="619px"
            position="absolute"
            bgcolor="#F4F9FF"
            sx={{
              left: "-67%",
              top: "16%",
              zIndex: "-1",
              borderTopLeftRadius: "150px",
            }}
          ></Box>
          <Box
            zIndex="-2"
            position="absolute"
            sx={{ top: "75%", left: "-125%" }}
          >
            <img
              src="/imgs/Ornamentdotblue.png"
              alt=""
              width="404px"
              height="154px"
            />
          </Box>

          <Box mt={10} mr="50px">
            <StyledBox mb={4}>
              <Box
                p={5}
                bgcolor="#F1F7FF"
                display="inline-block"
                borderRadius="20px"
                maxHeight="35px"
                marginX="65px"
                marginY="30px"
              >
                <AccessAlarmIcon fontSize="large" />
              </Box>
              <Typography variant="h4" fontSize={30} fontWeight={500} mb="20px">
                Business Idea Planning
              </Typography>
              <Typography variant="body1">
                We present you a proposal and discuss niffty-gritty like
              </Typography>
            </StyledBox>
            <StyledBox>
              <Box
                p={5}
                bgcolor="#FFF2F8"
                display="inline-block"
                borderRadius="20px"
                maxHeight="35px"
                marginX="65px"
                marginY="30px"
              >
                <AccessAlarmIcon fontSize="large" />
              </Box>
              <Typography variant="h4" fontSize={30} fontWeight={500} mb="20px">
                Business Idea Planning
              </Typography>
              <Typography variant="body1">
                We present you a proposal and discuss niffty-gritty like
              </Typography>
            </StyledBox>
          </Box>
        </Box>
        <Box>
          <StyledBox mb={4}>
            <Box
              p={5}
              bgcolor="#FFF7E3"
              display="inline-block"
              borderRadius="20px"
              maxHeight="35px"
              marginX="65px"
              marginY="30px"
            >
              <AccessAlarmIcon fontSize="large" />
            </Box>
            <Typography variant="h4" fontSize={30} fontWeight={500} mb="20px">
              Business Idea Planning
            </Typography>
            <Typography variant="body1">
              We present you a proposal and discuss niffty-gritty like
            </Typography>
          </StyledBox>
          <StyledBox>
            <Box
              p={5}
              bgcolor="#DEFFEE"
              display="inline-block"
              borderRadius="20px"
              maxHeight="35px"
              marginX="65px"
              marginY="30px"
            >
              <AccessAlarmIcon fontSize="large" />
            </Box>
            <Typography variant="h4" fontSize={30} fontWeight={500} mb="20px">
              Business Idea Planning
            </Typography>
            <Typography variant="body1">
              We present you a proposal and discuss niffty-gritty like
            </Typography>
          </StyledBox>
        </Box>
      </Box>

      <Box
        width="120px"
        height="120px"
        position="absolute"
        bgcolor="#fff"
        border="10px solid #FF007A"
        sx={{
          right: "-5%",
          bottom: "5%",
          zIndex: "-2",
          borderRadius: "100%",
        }}
      ></Box>
    </Box>
  );
}

export default BoyContent;
