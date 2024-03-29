import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import React from 'react'
import ImageGridList from './Imageflex'
import ImageGridListZO from './ImageflexZO'
import Nightkayaking from './Cloudinary'

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    background: 'linear-gradient(360deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
  },
  boxx: {
    background: 'linear-gradient(360deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      {/* <Nightkayaking /> */}
      {/* <ImageGridListZO /> */}
      <div className={classes.boxx}>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            KAYAK EXPEDITIONS
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Get in and paddle away, you are not meant to stay. Explore Adam and his surroundings in a explicit and sophisticated way,
            during a route making adventures only you can say!
          </Typography>
        </Container>
      </div>
      <ImageGridList />
    </div>
  )
}

export default Home
