import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Outdoors = () => {
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
                image="https://www.henceedu.com/wp-content/uploads/2022/07/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220729163102.jpg"
                title="Fraser River Trail - Musqueam Gateway"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Fraser River Trail - Musqueam Gateway
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    The Fraser River Trail is Vancouver's only riverside greenway. The greenway follows as close to the north shore of the North Arm of the Fraser River as possible and, when completed, it will connect Pacific Spirit Regional Park to the City of Burnaby's trail system. To date, McCleery Golf Course, Fraser River Park, Shaughnessy Street park site, Gladstone Park and Riverfront Park waterfront walkways and bikeways are all part of this greenway. Remaining sections of the riverfront trail will be completed as opportunities arise.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://covapp.vancouver.ca/parkfinder/parkdetail.aspx?inparkid=244">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjg2MjM2NzUvMjU3MTA0NmUzZTlhOTBlNjhkYjY2ZjMxMGVhNjg3ZTYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDIyLCJoZWlnaHQiOjMxMiwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
                title="St George's Trail"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    St George's Trail
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Try this 2.9-mile loop trail near North Vancouver, British Columbia. Generally considered a moderately challenging route, it takes an average of 2 h 8 min to complete. This is a popular trail for hiking and running, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through November. Dogs are welcome, but must be on a leash.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://www.alltrails.com/trail/canada/british-columbia/cascades-and-dreamweaver-loop--2?u=i">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTA5MTk5NDQvZTFjODdjNWNiYTA4N2JiZDAwYTcxMmEyMWQzNjY1MzAuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDIyLCJoZWlnaHQiOjMxMiwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
                title="Sasamat Trail"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Sasamat Trail
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Enjoy this 2.7-mile loop trail near Greater Vancouver A, British Columbia. Generally considered an easy route, it takes an average of 1 h 2 min to complete. This is a popular trail for birding and running, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through October.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://www.alltrails.com/trail/canada/british-columbia/huckleberry-nature-and-sasamat-trail?u=i">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDI2Nzk3NDIvZTU2MTliYjk2OGZjMWYzZmNmM2Y4NmFlN2Q3NDI1NWEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDIyLCJoZWlnaHQiOjMxMiwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
                title="Fraser Foreshore Trail"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Fraser Foreshore Trail
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Explore this 10.1-mile out-and-back trail near Vancouver, British Columbia. Generally considered an easy route, it takes an average of 3 h 6 min to complete. This is a popular trail for hiking, road biking, and running, but you can still enjoy some solitude during quieter times of day.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://www.alltrails.com/trail/canada/british-columbia/fraser-foreshore-park-trail?u=i">Learn More</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height:140 }}
                image="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzYxODg3MDYvNjg5NDJmOTU1N2JjYjgzNWZiNWY3MDhjNmE3M2I1ZmYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDIyLCJoZWlnaHQiOjMxMiwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
                title="Sword Fern Trail"
            />
            <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                    Sword Fern Trail
                </Typography>
                <Typography varient="body2" color="text.secondary">
                    Try this 5.4-mile loop trail near Greater Vancouver A, British Columbia. Generally considered an easy route, it takes an average of 1 h 50 min to complete. This is a popular trail for hiking, running, and walking, but you can still enjoy some solitude during quieter times of day.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="https://www.alltrails.com/trail/canada/british-columbia/council-trail-sword-fern-trail-marine-trail-and-clinton-trail-loop?u=i">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>
        
      </Grid>
    );
  };
  
  export default Outdoors;
  