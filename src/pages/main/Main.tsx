import { useState } from 'react'
import React from 'react';
import './Main.css'
import { Box, Button, Typography, Modal } from '@mui/material'
import Mariana from '../../assets/Mariana.jpeg'
import { flexbox } from '@material-ui/system';


function Main() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className='container'>
        <Box display="flex" flexDirection="row" p={1} m={1}>
          <Box p={1}>
            <h1>  Seja <span>Bem Vinde</span> ao Mural da <span id="nome"> Mariana Paz</span></h1>
            <div>
              <Button variant="outlined" className="botao" onClick={handleOpen}>
                Entrar
              </Button>
              <Modal
              className="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <p>oi</p>
              </Modal>
            </div>
          </Box>
          <Box className="img" p={1}>

          </Box>
        </Box>
      </div>

    </>
  )
}

export default Main