import React from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
// import { CenterFocusStrong } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Kayak Expeditions
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '1vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    minHeight: '30vh',
    textAlign: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    background: 'linear-gradient(45deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
    // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}))

export default function StickyFooter() {
  const classes: any = useStyles()

  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Start paddling, become one with fauna and flora around Adam!</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}
