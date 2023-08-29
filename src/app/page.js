"use client";

import styled from "@emotion/styled";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const BackgroundImageContainer = styled("div")({
  backgroundImage: 'url("/CircularVector.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  // alignItems: 'center',
  padding: 0,
  position: "relative",
});

const BackgroundPhoneImageContainer = styled("div")(({ theme }) =>({
  backgroundImage: 'url("/Phone.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "50vh",
  aspectRatio: "0.8",
  position: "absolute",
  top: "-90%",
  left: "50%",
  transform: "translate( -50%, 0% )",
  padding: 0,
  [theme.breakpoints.down('md')]: {
    height: "22vh",
  },
}));

const BackgroundStairsImageContainer = styled("div")(({ theme }) =>({
  backgroundImage: 'url("/Stairs.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vh",
  aspectRatio: "0.8",
  position: "absolute",
  top: "-150%",
  right: "-50%",
  transform: "translate( 0%, 0% )",
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    top: "-290%",
    height: "22vh",
  },
}));
const BackgroundcubeImageContainer = styled("div")(({ theme }) =>({
  backgroundImage: 'url("/Cube.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "7vmax",
  aspectRatio: "1",
  position: "absolute",
  top: "-170%",
  left: "-40%",
  transform: "translate( 0%, 0% )",
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    top: "-290%",
    left: "-20%",
  },
}));

const BackgroundPillarImageContainer = styled("div")({
  backgroundImage: 'url("/Pillar.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "30vh",
  aspectRatio: "3.4/2.8",
  position: "absolute",
  bottom: "0%",
  right: "20%",
  padding: 0,
});

const BackgroundCubesImageContainer = styled("div")(({ theme }) =>({
  backgroundImage: 'url("/Cubes.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "25vmin",
  aspectRatio: "1.1",
  position: "absolute",
  top: "250%",
  left: "-40%",
  transform: "translate( 0%, 0% )",
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    top: "290%",
    left: "-20%",
  },
}));

const page = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BackgroundImageContainer>
        <Container maxWidth="xl">
          <ResponsiveAppBar />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <BackgroundcubeImageContainer />
            <BackgroundStairsImageContainer />
            <Typography
              align="center"
              sx={{
                fontWeight: 900,
                fontSize: { xs: 100,sm: 150, md: 250, lg: 200 },
                lineHeight: 0.5,
              }}
              variant="h1"
              component={"h2"}
            >
              CASH
            </Typography>
            <BackgroundPhoneImageContainer />
            <BackgroundCubesImageContainer />
            <Typography
              align="center"
              sx={{
                fontWeight: 900,
                fontSize: { xs: 100,sm: 150,md: 250,  lg: 200 },
                position: "absolute",
                zIndex: 2,
                top: "100%",
                left: "50%",
                transform: "translate( -50%, 0% )",
              }}
              variant="h1"
              component={"h2"}
            >
              APP
            </Typography>
          </Box>
        </Container>
        <BackgroundPillarImageContainer />
      </BackgroundImageContainer>
    </ThemeProvider>
  );
};

export default page;
