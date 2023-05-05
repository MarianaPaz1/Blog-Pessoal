import { useState,  useEffect } from 'react';
import home from './home.css';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { Link, useNavigate } from 'react-router-dom';
import Main from '../main/Main';
import TabPostagem from '../../components/postagem/tabPostagem/TabPostagem';

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
  (state) => state.tokens
  );
  
  useEffect(() => {
  if (token == "") {
  alert("Você precisa estar logado")
  navigate("/login")
  
  }
  }, [token])
  

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