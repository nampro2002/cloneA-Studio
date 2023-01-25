import { Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box>
      <Box position="static" sx={{bgcolor:'#FEFEFE', color:'#000'}}>
      {/* = position fixed */}
      <Toolbar disableGutters>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          A+
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Studio
        </Typography>
        <Stack direction='row'  spacing="60px">
            <Button color="inherit" size="small">Home</Button>
            <Button color="inherit" size="small">What We Do</Button>
            <Button color="inherit" size="small">Service</Button>
            <Button color="inherit" size="small">Project</Button>
            <Button color="inherit" size="small">Blog</Button>
            <Button color="inherit" size="small">Contact</Button>
        </Stack>
      </Toolbar>
    </Box>
    </Box>
  );
}

export default Navbar;