import { Box, Grid, Typography } from "@mui/material";
import { margin, maxWidth } from "@mui/system";
import React from "react";

function BodyFeedback() {
  return (
    <Box height="600px" width="100%" ml="20px">
      <Box textAlign="center">
        <Typography variant="h4" mb="20px" gutterBottom fontWeight="500">
          What our happy client say
          <Typography variant="body1" mt="20px">
            Several selected clients, who already believe in our service.
          </Typography>
        </Typography>
      </Box>
      <Grid container md={12} mt="100px">
        <Grid item md={4} position="relative">
          <img
            src="/imgs/handsomemen.png"
            alt=""
            style={{ maxWidth: "319px", borderRadius: "100% 0 100% 100%" }}
          />
          <Box
            zIndex="-1"
            position="absolute"
            sx={{ top: "-13%", left: "43%" }}
          >
            <img
              src="/imgs/ornamentdotsmall.png"
              alt=""
              width="196px"
              height="154px"
            />
          </Box>
          <Box
            width="100px"
            height="100px"
            position="absolute"
            bgcolor="#fff"
            border="10px solid #FF007A"
            sx={{
              right: "70%",
              bottom: "-5%",
              zIndex: "-1",
              borderRadius: "100%",
            }}
          ></Box>
        </Grid>
        <Grid item md={4}>
          <Box
            p="20px"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h6" mb="20px" gutterBottom fontWeight="500">
              Matthew Paul
              <Typography
                variant="body2"
                mt="20px"
                width="330px"
                fontSize="13px"
              >
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </Typography>
            </Typography>
            <Box display="flex" justifyContent="space-between" width="40%">
              <Box
                width="10px"
                height="10px"
                bgcolor="#2639ED"
                borderRadius="100%"
              ></Box>
              <Box
                width="10px"
                height="10px"
                bgcolor="#E7F0FC"
                borderRadius="100%"
              ></Box>
              <Box
                width="10px"
                height="10px"
                bgcolor="#E7F0FC"
                borderRadius="100%"
              ></Box>
              <Box
                width="10px"
                height="10px"
                bgcolor="#E7F0FC"
                borderRadius="100%"
              ></Box>
              <Box
                width="10px"
                height="10px"
                bgcolor="#E7F0FC"
                borderRadius="100%"
              ></Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <img
            src="/imgs/picmain.png"
            alt=""
            style={{ maxWidth: "100px", borderRadius: "100%" }}
          />
          <img
            src="/imgs/pic1.png"
            alt=""
            style={{
              maxWidth: "78px",
              position: "absolute",
              top: "22%",
              right: "66%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic2.png"
            alt=""
            style={{
              maxWidth: "48px",
              position: "absolute",
              top: "10%",
              right: "46%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic3.png"
            alt=""
            style={{
              maxWidth: "34px",
              position: "absolute",
              top: "25%",
              right: "24%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic4.png"
            alt=""
            style={{
              maxWidth: "34px",
              position: "absolute",
              top: "48%",
              right: "16%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic5.png"
            alt=""
            style={{
              maxWidth: "48px",
              position: "absolute",
              top: "68%",
              right: "24%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic6.png"
            alt=""
            style={{
              maxWidth: "78px",
              position: "absolute",
              top: "72%",
              right: "50%",
              borderRadius: "100%",
            }}
          />
          <img
            src="/imgs/pic7.png"
            alt=""
            style={{
              maxWidth: "48px",
              position: "absolute",
              top: "55%",
              right: "75%",
              borderRadius: "100%",
            }}
          />
          <Box
            position="absolute"
            width="129px"
            height="129px"
            bgcolor="#FFF5DB"
            sx={{
              right: "46%",
              bottom: "26%",
              zIndex: "-1",
              borderRadius: "100%",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyFeedback;
