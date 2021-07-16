import { Box, makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Container';

import handleMenuClick from "./Header"


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      
      height: 168,
      padding: '0 30px',
      maxWidth: '100%',
    },
    Container: {
        maxWidth:"100%", 
        disableGutters: true,
    },

  });


export default function Footer() {
    const classes = useStyles(); 
    return (
    
        
    <footer  className={classes.root}>
        
            <Container className={classes.Container}  >
                <Grid Container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={0}></Box>

                        <Box bgcolor="inherit" color="primary.contrastText" p={2}>
                            <Link href="/" color="textPrimary"><Typography justify-content="center">Home</Typography></Link>

                        </Box>
                        <Box bgcolor="inherit" color="primary.contrastText" p={2}>
                            <Link href="./contact" color="textPrimary" justify-content="center">Contact</Link>

                        </Box>
                        <Box bgcolor="inherit" color="primary.contrastText" p={2}>
                            <Link href="./SignIn" justify-content="center" align="right" color="textPrimary">SignIn</Link>

                        </Box>
                        
                    </Grid>

                </Grid>
            </Container>
       
    </footer>
    
    )};