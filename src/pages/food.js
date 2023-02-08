import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Food = () => {
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
                <Button size="small" href="https://www.doordash.com/store/donair-dk-vancouver-871848/">Order Now</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://i0.wp.com/media.scoutmagazine.ca/2021/08/PizzeriaFarina_GroupExterior.jpeg?fit=1600%2C1067&ssl=1"
                title="Pizzeria Farina"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Pizzeria Farina
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Pizzeria Farina is a cozy Northern-Italian style Pizza Shop on Main Street in Chinatown, Vancouver, BC. They offer dine-in, take-out and pizza delivery.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://www.pizzeriafarina.com/">Order Now</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/950989-we-botcd-la-belle-patate-3389.jpg"
                title="La Belle Patate"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    La Belle Patate
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Quick-serve Canadian eatery stays open late serving unique poutines plus smoked meat & hot dogs.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://westcoastpoutine.wixsite.com/labellepatatevan">Order Now</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://duyt4h9nfnj50.cloudfront.net/resized/1536196484220-w2880-b0.jpg"
                title="Dosa & Curry"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Dosa & Curry
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    An array of classic Indian dishes, specializing in dosas, in an easygoing space with booth seating.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://dosaandcurry.ca/">Order Now</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://media-cdn.tripadvisor.com/media/photo-s/1b/9e/03/1a/tom-sushi.jpg"
                title="Tom Sushi"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Tom Sushi
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Casual restaurant serving Japanese staples including sushi, tempura, noodles & donburi, plus sake.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://tomsushi.ca/">Order Now</Button>
            </CardActions>
        </Card>
        </Grid>
        
      </Grid>
    );
  };
  
  export default Food;
  