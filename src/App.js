import React,{Component}from 'react';
import {random} from 'lodash';
import 'typeface-roboto';
//import './App.css';
//import Button from './components/Button';
import QuoteMachine from './components/QuoteMachine';
import { Grid, withStyles } from '@material-ui/core';

const styles={
  container:{
    alignItems:'center',
    display:'flex',
    height:'100vh',
    background: 'linear-gradient(45deg,#8e0e00,30%, #1f1c18 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#8e0e00',
    padding: '0 30px',


  }
};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      quotes:[],
      selectedQuoteIndex:null,
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    //this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data=>data.json())
    .then(quotes=>this.setState({quotes},this.assignNewQuoteIndex));
  }

   // .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
 generateNewQuoteIndex() {
   if(!this.state.quotes.length){
     return undefined;
   }
   return random(0,this.state.quotes.length-1);
 }
 assignNewQuoteIndex(){
  this.setState({selectedQuoteIndex:this.selectQuoteIndex()});

 }
  render(){  
  return (
    <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
    <Grid xs={11} lg={8}  item>
    {
      this.selectedQuote?
    <QuoteMachine selectedQuote={this.selectedQuote}assignNewQuoteIndex={this.assignNewQuoteIndex}/>:null
    }
    </Grid>
    </Grid>
  );
}
}
export default withStyles(styles)(App);
