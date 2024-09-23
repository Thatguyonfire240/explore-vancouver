import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
const CardMemo = React.memo(Card);

const News = () => {
    return (    
      <Grid maxWidth="x1" container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <div>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='CityOfVancouver'
              options={{height: 400, width: 350}} />
          </div>
        <Card sx={{ width: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              
            </Typography>
          </CardContent>
        </Card>
        <div>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='VancouverPD'
              options={{height: 400, width: 350}} />
          </div>
        <Card sx={{ width: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              
            </Typography>
          </CardContent>
        </Card>
        <div>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='VancouverWthr'
              options={{height: 400, width: 350}} />
          </div>
        <Card sx={{ width: 350 }}>
          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        
      </Grid>
    );
  };
  
  export default News;
  