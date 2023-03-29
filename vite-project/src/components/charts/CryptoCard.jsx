import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CryptoCard({symbol, price, buttonHandler}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {symbol}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary" onClick={buttonHandler}>
            View Details
        </Button>          
      </CardActions>
    </Card>
  );
}
