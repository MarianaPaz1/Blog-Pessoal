import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';


function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() =>{
    if (token == '') {
      alert ("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() =>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema => (
        <Grid container >
 
        <Grid xs={6}>
     <Box m={2} > 
        <Card>
          <CardContent>
            <Typography  gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={'/formularioTema/${tema.id}'} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={'/deletarTema/${tema.id}'} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' >
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box> 
      </Grid>
      </Grid>
      ))
      }
    </>
  );
}


export default ListaTema;