import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import historyImage from './images/placeholder.jpg';
import buildsImage from './images/builds.jpg';
import profileImage from './images/placeholder2.jpg';


const OutlinedCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Card variant="outlined" sx={{ mx: 2, height:'100%', width:'33%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Profile
          </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="70%"
            image={profileImage}
            alt="Profile Image"
          />
        <CardActions>
          <Button variant='contained' size="small" component={Link} to="/profile">
            Your profile and general info
          </Button>
        </CardActions>
      </Card>

      <Card variant="outlined" sx={{ mx: 2,  height:'100%', width:'33%'  }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Builds
          </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="70%"
            image={buildsImage}
            alt="Profile Image"
          />
        <CardActions>
          <Button variant='contained' size="small" component={Link} to="/builds">
            Create and edit your builds/items
          </Button>
        </CardActions>
      </Card>

      <Card variant="outlined" sx={{ mx: 2,  height:'100%', width:'33%'  }}>
        <CardContent>
          <Typography variant="h5" component="div">
            History
          </Typography>
        </CardContent>
        <CardMedia
            component="img"
            height="70%"
            image={historyImage}
            alt="Profile Image"
          />
        <CardActions>
          <Button variant='contained' size="small" component={Link} to="/history">
            Review and check your game history
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default OutlinedCard;