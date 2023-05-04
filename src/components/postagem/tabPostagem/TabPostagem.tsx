import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import ListaPostagem from '../listaPostagem/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className="nav2" centered  onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaPostagem/>
          </Box>
        </TabPanel>
        <TabPanel value="2">
          {/* <Typography variant="h5" gutterBottom component="h5" align="center" className="titulo">Sobre-Nós</Typography> */}
          <Typography variant="body1" gutterBottom align="justify">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/jXNXcn-Lnvs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;