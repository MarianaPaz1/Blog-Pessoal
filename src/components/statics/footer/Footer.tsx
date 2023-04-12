import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Mariana from './src/assets/Mariana.jpeg'


export const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={6}>
                        <Typography color="black" variant="h5">
                            <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
                            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#CD8D00',
              textDecoration: 'none',
            }}
          >
            BLOG PESSOAL
          </Typography>


                            </Box>
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                        <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
                                © {`${new Date().getFullYear()}  Mariana Paz `}
                            </Box>
                            </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="black" variant="h5">
                            <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon style={{ fontSize: 20, color: "brown" }} />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon style={{ fontSize: 20, color: "brown" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "brown" }} />
                                </a>
                            </Box>

                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                                Sobre  |  Contato   |   GitHub 
                            </Box>
                        </Typography>



                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Footer;