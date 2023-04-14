import React from 'react';
import './Login.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            
            <Grid xs={6}>
                 { <img src="https://i.pinimg.com/originals/d3/46/4a/d3464a4351fdf340ccb6bb37c281381a.gif" alt=""  />}
                 {/* <img className="foto" src="https://img.freepik.com/vetores-premium/mulher-negra-trabalhando-no-laptop-freelance-trabalho-remoto-estudo-online_254685-281.jpg?w=2000" /> */}
           </Grid>

            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom  component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id='usuario' label='usuário'  name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha'  name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' >Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;