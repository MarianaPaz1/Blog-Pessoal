import { useState } from 'react'
import './home.css'
import Navbar from '../../components/statics/navbar/Navbar';
import Footer from '../../components/statics/footer/Footer';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
 

  return (
    <>
      <Grid container >
        {/* NAVBAR */}
        <Grid item xs={12}>
          <Navbar/>
           </Grid>
        {/* ITEM 01 */}
        <Grid item xs={12}>
        <Item className="tamanho">Foto e texto</Item>
        </Grid>
        {/* ITEM 02 */}
        <Grid item xs={12}>
          <Item className="tamanho">Sobre mim</Item>
        </Grid>
        {/* ITEM 03 */}
        <Grid item xs={12}>
          <Item className="tamanho">Meu portifólio</Item>
        </Grid>
        {/* FOOTER */}
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>

    </>
  )
}

export default Home