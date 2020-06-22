import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions'; 
import CardContent from '@material-ui/core/CardContent'; 
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


//import Button from './Button';
const QuoteMachine=({assignNewQuoteIndex,selectedQuote})=>(
    <Card>
    <CardContent>
    <FontAwesomeIcon icon={ faQuoteLeft} size="lg" color="green"></FontAwesomeIcon>
        <Typography id="text">
        {selectedQuote.quote}-<span id="author">{selectedQuote.author}</span>
       </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" onClick={assignNewQuoteIndex}>Next Quote</Button> 
    <IconButton
    target="_blank"
    href={`https://twitter.com/intent/tweet?=${selectedQuote.quote}&hashtags=chris_kharel`}
    >

    <FontAwesomeIcon icon={faTwitter} size="md" color="#1DA1F2"></FontAwesomeIcon>
  

    </IconButton>
    

    </CardActions>

    
    
    </Card>
);
export default QuoteMachine
