import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import burguerImg from '../images/hamburguer.png'
import vegBurguerImg from '../images/vegBurguer.jpg'
import '../styles/components/card.css'

const cardStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 300,
      borderRadius: 10,
      backgroundColor: '#DAD2D8',
      margin: 10
    },
    media: {
      height: 150,
    },
    title: {
      fontSize: 25,
      fontWeight: 700,
      textAlign: 'center',
      fontFamily: 'Dancing Script'
    },
    text: {
      fontSize: 15,
      fontWeight: 400,
      textAlign: 'center',
      fontFamily: 'Lato',
      margin: 10
    }
  });

export default function MenuCard(){
    const classes = cardStyles();
    return(
      <div className="content-menu">
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={burguerImg}
              title="O poderoso chefão"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              O poderoso chefão
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              Pão da casa, burguer de fraldinha 180 gramas, bacon, alface, tomate, maionese da casa e molho do chefe
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={vegBurguerImg}
            title="O poderoso chefão"
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              A carne é fraca
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              Pão australiano, burguer vegano de feijão 180 gramas, rúcula, maionese da casa e molho do chefe
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
}