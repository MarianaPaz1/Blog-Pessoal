// import * as React from 'react';
// import './Navbar.css'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import useLocalStorage from 'react-use-localstorage';
// import { Link, useNavigate } from 'react-router-dom'
// import './Navbar.css'

// const pages = ['Home', 'Portifólio', 'Temas', 'Cadastrar Temas'];
// const settings = ['Logout'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   // Função para deslogar
//   const [token, setToken] = useLocalStorage('token');
//   let navigate = useNavigate();

//   function goLogout() {
//     setToken('')
//     alert("Usuário deslogado")
//     navigate('/login')

//   }

//   return (
//     <AppBar position="static">

//       <Container maxWidth="xl" className='text-decorator-none'>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#CD8D00',
//               textDecoration: 'none',
//             }}
//           >
//             BLOG
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >

//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >

//                 <Link to="/home">
//                 <MenuItem onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Home</Typography>
                  
//                 </MenuItem>
//                 </Link>

//             </Menu>

//           </Box>
       
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >

//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }} onClick={goLogout}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOnPAaq91xDOeIxxT9lMloWMnI28uSVjdANj1ksh4qbXb_gpDNZScToiVO32F9l__UD8&usqp=CAU" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>

//     </AppBar >
//   );
// }
// export default Navbar;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {

const token = useSelector<TokenState, TokenState["tokens"]>(
(state) => state.tokens
);
let navigate = useNavigate();
const dispatch = useDispatch();

function goLogout() {
dispatch(addToken(''));
alert("Usuário deslogado")
navigate('/login')
}

var navbarComponent;

if (token != "") {
navbarComponent = <AppBar position="static">
<Toolbar variant="dense" className='barra-ferramenta'>
<Box className='cursor'>
<Typography variant="h5" >
BlogPessoal
</Typography>
</Box>

<Box display="flex" justifyContent="start">
<Link to="/home" className="text-decorator-none">
<Box mx={1} className='cursor'>
<Typography variant="h6" >
home
</Typography>
</Box>
</Link>
<Link to="/post" className="text-decorator-none">
<Box mx={1} className='cursor'>
<Typography variant="h6">
postagens
</Typography>
</Box>
</Link>
<Link to="/tema" className="text-decorator-none">
<Box mx={1} className='cursor'>
<Typography variant="h6" >
temas
</Typography>
</Box>
</Link>
<Link to="/formularioTema" className="text-decorator-none">
<Box mx={1} className='cursor'>
<Typography variant="h6" >
cadastrar tema
</Typography>
</Box>
</Link>

<Box mx={1} className='cursor' onClick={goLogout}>
<Typography variant="h6" color="inherit">
logout
</Typography>
</Box>


</Box>

</Toolbar>
</AppBar>
}

return (
<>
{navbarComponent}
</>
)
}

export default Navbar;