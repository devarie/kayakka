import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      height: '11vh',
    },
  
  
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
    height: '11%',
    padding: theme.spacing(8, 0, 6),
    marginBottom: theme.spacing(4)
  },
  cardHeader: {
    background:
    'linear-gradient(45deg, rgba(245, 229, 27, 1) 30%,rgba(255, 255, 126, 1)  90%)',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
   
    },
    pricingContent: {
      height: '11vh',
      paddingBottom: theme.spacing(4),
      marginBottom: theme.spacing(4),
  },
}));

const tiers = [
  {
    title: '2.5 hour daytrip',
    price: '20',
    description: ['1 Persons', 'Kayak and Paddles', 'Luggage compartment'],
    buttonText: <div> <Link color="inherit" href="http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/services/s10189cb097b516147fb8c75418ba572302a8c856">Reserve your Expedition</Link></div>,
    buttonVariant: 'outlined',
  },{
    title: '2.5 hour daytrip',
    price: '40',
    description: ['2 Persons', '2 Kayaks and Paddles', 'Luggage compartments'],
    buttonText: <div> <Link color="inherit" href="http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/services/sa01a76f4b4c339ee89569dc98f03171b370ba285">Reserve your Expedition</Link></div>,
    buttonVariant: 'outlined',
  },{
    title: '2.5 hour daytrip',
    price: '40',
    description: ['2 Persons', '2 person Kayak and Paddles',],
    buttonText: <div> <Link color="inherit" href="http://my.setmore.com/bookingpage/231dbc8e-5185-4212-9c8b-f38ea033ed48/services/sce393183ebc52e53e49879be6f846daff8ca468e">Reserve your Expedition</Link></div>,
    buttonVariant: 'outlined',
  },
  {
    title: '4 hour daytrip',
    price: '340',
    description: ['4 Persons', 'Kayaks and Paddles', 'Guide included', 'Luggage compartment'],
    buttonText: <div> <Link color="inherit" href="https://kayakexpeditions.setmore.com">Reserve your Expedition</Link></div>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Day and Night trip',
    subheader: 'Most popular',
    price: '875',
    description: [
      '4 Persons',
      'Kayaks and Paddles',
      'Guide included',
      'Luggage compartment',
      'Fine dining possibilities',
    ],
    buttonText: <div> <Link color="inherit" href="https://kayakexpeditions.setmore.com">Reserve your Expedition</Link></div>,
    buttonVariant: 'contained',
  },
  {
    title: 'Weekender',
    price: '1145',
    description: [
      '4 Persons',
      'Kayaks and Paddles',
      'Guide included',
      'Luggage compartment',
      'Fine dining possibilities',
      'Scenery Photography'
    ],
    
    buttonText:<div> <Link color="inherit" href="https://kayakexpeditions.setmore.com">Reserve your Expedition</Link></div>,
    buttonVariant: 'outlined',
  },];
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Choose your desired Kayak expedition, take some time off to go and explore the beautifull surroundings of Amsterdam.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" classname={classes.pricingContent}>
        <Grid container spacing={6} alignItems="flex-end">
          {tiers.map((tier) => (
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
                    <Typography variant="h6" color="textSecondary">
                      
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" href={tier.link}>
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
    </React.Fragment>
  );
}