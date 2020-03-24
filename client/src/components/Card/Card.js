import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlineCard() {
  const classes = useStyles();
 

  return (
    <Container>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
         title
        </Typography>
        
        <Typography variant="body2" component="p">
          lorem ipsumas;lkdfja;sldfkja;sldkfja;ldjf;alkdjfa;slkdjf;aldkf;aldkjf;alsdkjf;aldfja;lsdkfja;sldkfja;lkdjfalkdjfaoreifadlksnv;alskdjf;alsdjf;lakdjf;alksdjf;lasdkjf
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Container>
  );
}