import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

const pages = [
  {
    title: "Products",
    path: "/"
  },
  {
    title: "Cart",
    path: "/cart"
  }
];
const settings = ["Profile", "Logout"];

function Header() {
  const { userLogout, navigate, cartProducts, userData, productView, setProductView } = useContext(GlobalContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleChange = (event) => {
    setProductView(event.target.checked);
  };

  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e, path) => {
    navigate(path)
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (action) => {
    console.log(action);
    if (action === "Logout") {
      userLogout();
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <img src="icon.jpeg" alt="LOGO" style={{ width: '50%' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={(e) => handleCloseNavMenu(e, page.path)} selected={location.pathname === page.path} >
                  <Typography textAlign="center">{page.title}</Typography>
                  {
                    cartProducts.length && page.path === "/cart" ? <span style={{ marginLeft: 5 }}>({cartProducts.length})</span> : null
                  }
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <img src="icon.jpeg" alt="LOGO" style={{ width: '50%' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={(e) => handleCloseNavMenu(e, page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
                style={location.pathname === page.path ? { borderRadius: 0, borderBottom: "3px solid white" } : {}}
              >
                {page.title}
                {
                  cartProducts.length && page.path === "/cart" ? <span style={{ marginLeft: 5 }}>({cartProducts.length})</span> : null
                }
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: 'flex' }, justifyContent: "center" }}>
            <>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Table View</Typography>
                <Switch
                  checked={productView}
                  onChange={handleChange}
                  color="warning"
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography>Card View</Typography>
              </Stack>
            </>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Typography style={{ padding: 10 }}>Welcome {userData.name}!</Typography>
            <Button sx={{ my: 2, color: "white", border: '2px solid white' }} onClick={() => userLogout()}>Log out</Button>

            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  id={settings}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;