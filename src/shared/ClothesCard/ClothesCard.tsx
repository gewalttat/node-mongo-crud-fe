import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ClothesCardProps {
    num: string,
    name: string,
    size: string,
    price: number
}

export const ClothesCard: FC<ClothesCardProps> = ({name, size, price, num}) => {
  return (
    <div className={`hoodie${num}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={require("../static/jpg/hoodie.jpeg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} {size} {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Худи удобное красивое классное
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}