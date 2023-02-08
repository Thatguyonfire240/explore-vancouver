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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://lh3.googleusercontent.com/p/AF1QipPYSqQtjH1th-wVSZ8qpEKl7XjwVn-XEC11LAQA=s680-w680-h510"
                title="Donair King"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Donair King
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Donair king is open until very early in the morning for all your shawarma needs!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/donair-king">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://lh3.googleusercontent.com/p/AF1QipPYSqQtjH1th-wVSZ8qpEKl7XjwVn-XEC11LAQA=s680-w680-h510"
                title="Donair King"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Donair King
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Donair king is open until very early in the morning for all your shawarma needs!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="/donair-king">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>
        
      </Grid>
    );
  };
  
  export default Home;
  