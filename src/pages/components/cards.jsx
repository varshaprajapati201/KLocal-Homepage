import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Link, Tab } from '@mui/material';


export const Cards = (props)=>{
    return (<div>

<div className="card shadow h-100">
      <img className="card-img-top" src={props.img} alt="Project" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.content}</p>
        <Button className='botton' variant="contained">Go somewhere</Button>
      </div>
    </div>
{/* <Card className="my-4" sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        height="140"
      
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.content}
        </Typography>
      </CardContent>
      <CardActions>
      <Button className='botton' variant="contained">Go somewhere</Button>
      </CardActions>
    </Card> */}
    </div>);
}