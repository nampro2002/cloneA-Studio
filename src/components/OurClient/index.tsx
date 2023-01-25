import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function BodyClient() {
  return (
    <Grid alignItems="center" justifyContent="space-between" container>
      <Grid item>
        <Typography variant="h4" fontWeight='500' fontFamily='Segoe UI' mb='20px'>Our Client</Typography>
        <Typography variant="body1" maxWidth='300px'>
          Several selected clients, who already believe in our service.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt=""
          style={{ maxWidth: "150px" }}
        />
      </Grid>
      <Grid item>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          style={{ maxWidth: "170px" }}
        />
      </Grid>
      <Grid item>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uber_Eats_2020_logo.svg/1200px-Uber_Eats_2020_logo.svg.png"
          alt=""
          style={{ maxWidth: "150px" }}
        />
      </Grid>
      <Grid item pt='15px'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
          style={{ maxWidth: "130px" }}
        />
      </Grid>
    </Grid>
  );
}

export default BodyClient;
