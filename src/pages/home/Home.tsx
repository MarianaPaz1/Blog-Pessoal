import { useState } from 'react'
import './home.css'
import Navbar from '../../components/statics/navbar/Navbar';
import Footer from '../../components/statics/footer/Footer';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Main from '../main/Main';

function Home() {

 

  return (
    <>
      <Grid container >
        {/* NAVBAR */}
        <Grid xs={12}>
          <Navbar/>
           </Grid>
        {/* ITEM 01 */}
        <Grid xs={12}>
        <Main/>
        </Grid>
        {/* ITEM 02 */}
        <Grid  xs={12}>
         
        </Grid>
        {/* ITEM 03 */}
        <Grid  xs={12}>
        </Grid>
        {/* FOOTER */}
        <Grid xs={12}>
          <Footer/>
        </Grid>
      </Grid>

    </>
  )
}

export default Home