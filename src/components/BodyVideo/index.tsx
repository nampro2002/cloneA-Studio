import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BodyVideo() {
  return (
    <Grid container md={12}>
      <Grid item md={6}>
        <Box  position='relative'>
          <img
            src="./imgs/videoImage.png"
            alt=""
            width="550px"
            height="372px"
            style={{ borderRadius: "35px" }}
          />
           <Box
              position="absolute"
              width="129px"
              height="129px"
              bgcolor="#FFF5DB"
              sx={{
                right: "-5%",
                bottom: "-15%",
                zIndex: "-1",
                borderRadius: "100%",
              }}
            ></Box>
        </Box>
       
      </Grid>
      <Grid item md={6}>
        <Box m="16% 15%" position='relative'>
          <Typography
            variant="h4"
            mb="20px"
            gutterBottom
            width="330px"
            fontWeight="500"
          >
            Great Digital Product Agency since 2016
            <Typography variant="body1" mt="20px" align="left" width="520px">
              Our Business Plan is a written document describing a company's
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </Typography>
          </Typography>
          <Box
              position="absolute"
              width="178px"
              height="178px"
              bgcolor="#EFF1FF"              
              sx={{
                left: "-17%",
                top: "-15%",
                zIndex: "-1",
                borderBottomRightRadius: "55%",
              }}
            ></Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BodyVideo;
