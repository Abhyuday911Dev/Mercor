"use client";

import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  SvgIcon,
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

const BackgroundPhoneImageContainer = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    height: "22vh",
  },
}));

const BackgroundStairsImageContainer = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    top: "-290%",
    height: "22vh",
  },
}));
const BackgroundcubeImageContainer = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
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

const BackgroundCubesImageContainer = styled("div")(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
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
                fontSize: { xs: 100, sm: 150, md: 250, lg: 200 },
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
                fontSize: { xs: 100, sm: 150, md: 250, lg: 200 },
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
          <Grid
            container
            sx={{
              position: "absolute",
              bottom: "0",
              p: { xs: 2, md: 4 },
              zIndex: 2,
            }}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item xs={12} lg={5.5} display={"flex"}>
              <Grid item sm={6} lg={2.5}>
                <Button variant="outlined" size="large">
                  gsrgfsd
                </Button>
              </Grid>
              <Grid item sm={6} lg={3}>
                <Button variant="outlined" size="large">
                  gsrgfsd
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              lg={1}
              sx={{ display: { xs: "none", md: "none", lg: "initial" } }}
            >
              <IconButton aria-label="Example">
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="30"
                    viewBox="0 0 18 30"
                    fill="none"
                  >
                    <path
                      d="M9.69361 29.6495L17.7513 20.4362C18.121 20.0137 18.0726 19.3748 17.6455 19.0109C17.2178 18.6456 16.5717 18.6921 16.202 19.1147L10.0265 26.1768V1.01089C10.0265 0.452881 9.56877 0 9.00321 0C8.43765 0 7.97988 0.452881 7.97988 1.01089V26.4308L4.34299 22.4055L1.82561 19.2609C1.47495 18.8235 0.831623 18.7487 0.388182 19.0951C0.133032 19.2946 0 19.5905 0 19.889C0 20.1087 0.0716343 20.3298 0.221039 20.5158L2.77798 23.7055L8.15658 29.6617C8.35237 29.8787 8.63345 30.002 8.92817 30C9.2222 29.9973 9.50123 29.8706 9.69361 29.6495Z"
                      fill="#00D54B"
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Grid>
            <Grid item xs={12} lg={5.5}>
              <Grid item xs={10} lg={10}>
                <Typography variant="body2" lineHeight={1.2}>
                  Brokerage services by Cash App Investing LLC, member FINRA /
                  SIPC. See our BrokerCheck. Investing involves risk; you may
                  lose money. Bitcoin trading offered by Cash App. Cash App
                  Investing does not trade bitcoin and Cash App is not a member
                  of FINRA or SIPC. Cash App facilitates banking services
                  through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </Typography>
              </Grid>
              {/* <Grid item lg={3}>
                <Button variant="outlined" size="large">
                  gsrgfsd
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
        </Container>
        <BackgroundPillarImageContainer />
      </BackgroundImageContainer>
    </ThemeProvider>
  );
};

export default page;
