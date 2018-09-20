// import React from 'react';
// //import { Link } from 'react-router-dom';
// import {Collection, CollectionItem} from 'react-materialize';

// const Home = () => (
//   <Collection header={<div>Home Page</div>}> 
//     <CollectionItem href='./apps'>Posts</CollectionItem>
//    </Collection>
// )

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center',
  },

  Button: {
    justify: 'center',
  },

  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" component="h2">
         Welcome to Posts!
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/apps" className={classes.button}>
          Checkout Posts
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

// export default Home;