import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Home = () => {
    return (    
      <Grid maxWidth="x1" container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 350 }}>
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Welcome to my site documenting things to do around Vancouver!
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    This site is dedicated to documenting cool and interesting things to do around
                    Vancouver, BC! As I travel and explore the area, this site will be updated.
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        
      </Grid>
    );
  };
  
  export default Home;
  