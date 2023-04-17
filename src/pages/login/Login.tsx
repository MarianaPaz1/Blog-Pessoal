import React, { useState, ChangeEvent, useEffect } from 'react';
import './Login.css'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';



function Login() {
    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''

        })
    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (token != '') {
            history('/home')

        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log('userLogin: ' + Object.values(userLogin));
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Os dados do usuário está inconsistente. Erro ao logar!');
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>

            <Grid xs={6}>
                {<img src="https://i.pinimg.com/originals/d3/46/4a/d3464a4351fdf340ccb6bb37c281381a.gif" alt="" />}
                {/* <img className="foto" src="https://img.freepik.com/vetores-premium/mulher-negra-trabalhando-no-laptop-freelance-trabalho-remoto-estudo-online_254685-281.jpg?w=2000" /> */}
            </Grid>

            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className="texto">Entrar</Typography>
                        <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Usuário' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Senha' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' >Logar</Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="texto">cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;