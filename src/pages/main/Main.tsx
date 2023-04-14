import { useState } from 'react'
import React from 'react';
import './Main.css'
import { Box, Button, Typography, Modal } from '@mui/material'
import Mariana from '../../assets/Mariana.jpeg'
import { flexbox } from '@material-ui/system';


function Main() {



  return (
    <>
      <div className='container'>
        <Box display="flex" flexDirection="row" p={1} m={1}>
          <Box p={1}>
            <h1> Seja Bem Vinde! <span id="nome"> Mariana Paz</span></h1>
            <p>Expresse com responsabilidade os seus pensamentos e opiniões</p>
          
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
                         
            <Button variant="outlined" className="botao" >
            Nova Postagem
              </Button>
              
       
          </Box>
          <Box className="img" p={1}>

          </Box>
        </Box>
      </div>

        </>
  )
}

export default Main