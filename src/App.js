import React, { Component } from 'react';
import logo from './logo.png';
import { SentimentBarGraph, SentimentWordCloud, SentimentBubbleChart } from "./components/Graphs/index";
import { SentimentSearchBar } from "./components/SentimentSearchBar/index";

class App extends Component {
  constructor(){
      super()
      this.state = {query: '', showGraphs: false}
  }

  onRequestSearch = (value) => {
      if(this.state.query.length > 0)
        this.setState({showGraphs: true})
      else
        this.setState({showGraphs: false})
  }

  onChange = (value) => {
      this.setState({query: value})
  }

  render() {
    return (
	   <div style={container}>
		 <div>
		 	<img src={logo} style={imgStyle}/>
            <SentimentSearchBar _onRequestSearch={this.onRequestSearch} _onChange={this.onChange}/>
            <div style={chartStyle}>
                {this.state.showGraphs ? <div> <SentimentBarGraph/> <SentimentWordCloud/>  </div> : null}
            </div>
		 </div>
	   </div>
    );
  }
}

const container = {
  display: "flex",
  "marginTop": "50px",
  justifyContent: "center",
}

const imgStyle = {
    maxWidth: 500,
    maxHeight: 500,
    "marginBottom": "50px",
}

const chartStyle = {
    "flex-direction": "row",
    "marginTop": "150px",
}

export default App;
