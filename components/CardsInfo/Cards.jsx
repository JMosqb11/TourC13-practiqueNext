import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (

<div className="CardsInforamation-general">
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1672947108/the-morgana-poblado-suites_nevwtf.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lo pollitos dicen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ubicado cerca a la estacion del metro 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 345 }}>
<CardMedia
  sx={{ height: 140 }}
  image="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1672947108/Mi_palenque_tfx8wq.jpg"
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Mi Palenque
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Restaurante Afro ubicado en la planta baja de la comuna 13
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Ver</Button>
</CardActions>
</Card>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://res.cloudinary.com/dk9ktxdpj/image/upload/v1672947108/AfrooTour_kjmmzo.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AfroTour
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Turismo impartido por la Coorporación Son Bata
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
      </CardActions>
    </Card>

</div>
  );
}
