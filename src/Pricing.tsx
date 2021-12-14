import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Background from './images/genieten.jpeg'

const useStyles = makeStyles(theme => ({
  // root: {
  //   height: '180vh',
  // },

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    minheigt: '3000px',
    // height: '1vh',
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  background: {
    backgroundImage: `url(${Background})`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    // height: '11%',
    padding: theme.spacing(8, 0, 0),
    marginBottom: theme.spacing(4),
  },
  cardHeader: {
    background: 'linear-gradient(45deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  // footer: {
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   borderTop: `1px solid ${theme.palette.divider}`,
  //   marginTop: theme.spacing(8),
  //   paddingTop: theme.spacing(3),
  //   paddingBottom: theme.spacing(3),
  //   [theme.breakpoints.up('sm')]: {
  //     paddingTop: theme.spacing(3),
  //     paddingBottom: theme.spacing(6),
  //   },
  // },
  pricingContent: {
    // height: '11vh',
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}))

const tiers = [
  {
    title: '3 Hour Full Moon Night Trip',
    price: '30',
    description: ['1 Person', 'Kayak and Paddles', 'Gluhwein included',
    'Light your own kayak', '18 December 2021'],
    buttonText: 'Reserve your Expedition',
    buttonVariant: 'outlined',
    color: 'inherit',
    link: 'https://booking.setmore.com/scheduleappointment/231dbc8e-5185-4212-9c8b-f38ea033ed48/class/026fcb73-3bf3-4482-9732-913044409990',
  },
  // {
  //   title: '2.5 hour daytrip',
  //   price: '40',
  //   description: ['2 Persons', '2 Kayaks and Paddles', 'Luggage compartments'],
  //   buttonText: 'Reserve your expedition',
  //   color: 'inherit',
  //   link: 'http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/services/sa01a76f4b4c339ee89569dc98f03171b370ba285',
  //   buttonVariant: 'outlined',
  // },
  // {
  //   title: '2.5 hour daytrip',
  //   price: '40',
  //   description: ['2 Persons', '2 person Kayak and Paddles'],
  //   buttonText: 'Reserve your Expedition',
  //   color: 'inherit',
  //   buttonVariant: 'contained',
  //   link: 'http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/services/sce393183ebc52e53e49879be6f846daff8ca468e',
  // },
  // {
  //   title: '4 hour daytrip',
  //   price: '340',
  //   description: ['4 Persons', 'Kayaks and Paddles', 'Guide included', 'Luggage compartment', '', ''],
  //   buttonVariant: 'outlined',
  //   buttonText: 'Reserver your Expedition',
  //   color: 'inherit',
  //   link: 'http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/class/78b57d2a-8abe-4c90-8ab6-a6195397235b',
  // },
  {
    title: 'Day and Night trip',
    subheader: 'Most popular',
    price: '875',
    description: [
      '4 Persons',
      'Kayaks and Paddles',
      'Guide included',
      'Luggage compartment',
      '1 hotel night incl.',
      'Fine dining possibilities"',
    ],
    buttonText: 'Reserve your Expedition',
    buttonVariant: 'contained',
    link: 'http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/class/d079eb7b-431c-4f46-b3ac-1467b16b896e',
  },
  {
    title: 'Weekender',
    price: '1140',
    description: [
      '4 Persons',
      'Kayaks and Paddles',
      'Guide included',
      '2 hotel nights incl.',
      'Fine dining possibilities',
      'Scenery Photography',
    ],
    buttonText: 'Reserve your Expedition',
    color: 'inherit',
    link: 'http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/class/da5536ed-7a18-47e4-a511-153fc7f7d63f',
  },
]

export default function Pricing() {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Choose your desired Kayak expedition, take some time off to go and explore the beautifull surroundings of Amsterdam.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className={classes.pricingContent}>
        <Grid container spacing={6} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      € {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" />
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary" href={tier.link} target="_blank">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
      {/* End footer */}
    </div>
  )
}
