import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/Actions';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = token !== '';

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="nav">


            <Toolbar variant="dense" className="toolbarStyle">
                <Box display="flex" className="nav_links">

                    <Box className="cursor">
                        <Typography className="logo nameTypo" variant="h6" color="inherit">
                            BLOG
                        </Typography>
                    </Box>
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography className="nameTypo" variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/post" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography className="nameTypo" variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/tema" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography className="nameTypo" variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/portfolio" className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography className="nameTypo" variant="h6" color="inherit">
                                Portifólio
                            </Typography>
                        </Box>
                    </Link>
                </Box>

                {isLoggedIn ? (
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit" className="logout">
                            Sair
                        </Typography>
                    </Box>
                ) :
                    <Link to='/login' className='cursor'>
                        <Typography variant="h6" color="inherit" className="logout">
                            Entrar
                        </Typography>
                    </Link>}

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