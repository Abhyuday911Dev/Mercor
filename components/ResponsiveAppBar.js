import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const pages = [
  "SIGN IN",
  "LEGAL",
  "LICENCES",
  "SECURITY",
  "CAREERS",
  "PRESS",
  "SUPPORT",
  "STATUS",
  "CODEBLOG",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const EyeImageContainer = styled("div")({
  backgroundImage: 'url("/eye.svg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "max(80px, 2vw)",
  aspectRatio: "1.8",
  display: "flex",
  justifyContent: "center",
  padding: 0,
  cursor: "pointer",
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent" }} elevation={0}>
      <Container
        maxWidth="xl"
        sx={{ bgcolor: "transparent", backgroundImage: "transparent" }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: { xs: 1, lg: 0 }, display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                justifyContent: "center",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: { md: 0, lg: 1 },
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Eye of the tiger">
              <EyeImageContainer />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
