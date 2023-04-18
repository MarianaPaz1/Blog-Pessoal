import { useState } from 'react'
import './home.css'
import Grid from '@mui/material/Grid';

import Main from '../main/Main';
import TabPostagem from '../../components/postagem/tabPostagem/TabPostagem';

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
          <TabPostagem/>
        </Grid>

          {/* ITEM 03 */}
          <Grid  xs={12}>
        </Grid>
   
   
    
      </Grid>

    </>
  )
}

export default Home