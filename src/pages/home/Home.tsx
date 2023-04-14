import { useState } from 'react'
import './home.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Main from '../main/Main';
import Footer from '../../components/statics/footer/Footer';
import Navbar from '../../components/statics/navbar/Navbar';
function Home() {

 

  return (
    <>
      <Grid container >
 
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
   
    
      </Grid>

    </>
  )
}

export default Home