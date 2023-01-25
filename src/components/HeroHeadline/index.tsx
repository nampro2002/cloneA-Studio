import React from "react";
import { Box, Grid, Container, Stack, Typography, Button } from "@mui/material";
import { padding } from "@mui/system";
import heroheader from "../../assets/heroheader.png";

function HeroHeadline() {
  return (
    <Container sx={{ height: "600px" }}>
      <Stack direction="row">
        <Box flex={1} p="53px">
          <Box position="relative">
            <Box zIndex="-1" position="absolute" sx={{ top: "85%", left:'-10%' }}>
              <img
                src="/imgs/Ornamentdot.png"
                alt=""
                width="404px"
                height="154px"
              />
            </Box>
            <Typography variant="h4" mb="30px" gutterBottom>
              A Digital Product Agency
            </Typography>
            <Typography variant="body1" mb="30px" align="left" width="450px">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: "30px", paddingX: "30px", paddingY: "20px" }}
            >
              Contact Now
            </Button>
          </Box>
        </Box>
        <Box flex={1} position="relative">
            <Box
              position="absolute"
              width="178px"
              height="178px"
              bgcolor="#FFF5DB"              
              sx={{
                right: "-15%",
                bottom: "-20%",
                zIndex: "-1",
                borderBottomRightRadius: "55%",
              }}
            ></Box>
            <Box
              position="absolute"
              width="129px"
              height="129px"
              bgcolor="#DAE9FF"
              sx={{
                left: "-13%",
                top: "0%",
                zIndex: "-1",
                borderRadius: "100%",
              }}
            ></Box>
          <img
            src="/imgs/heroheader.png"
            alt=""
            style={{
              width: "130%",
              height: "100%",
              borderBottomLeftRadius: "100px",
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
}

export default HeroHeadline;
