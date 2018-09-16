import React, { Component } from 'react';
import { BarChart } from "react-d3-components"
import ReactWordCloud from 'react-wordcloud';

class SentimentBarGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                label: 'Frequency',
                values: [{x: 'Love', y: 20}, {x: 'Hope', y: 10}, {x: 'Trust', y: 5}]
            }]
        }
    }

    render () {
        return (
            <BarChart
                data={this.state.data}
                width={400}
                height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
            );
    }
}

const words = [
  {word: 'Devpost', value: 200},
  {word: 'world', value: 20},
  {word: 'github', value: 5},
  {word: 'happy', value: 10},
  {word: 'hate', value: 19},
  {word: 'people', value: 37},
  {word: 'help', value: 3},
  {word: 'disgust', value: 1},
  {word: 'please', value: 7},
  {word: 'hope', value: 19},
  {word: 'trust', value: 5},
  {word: 'batman', value: 3},
  {word: 'gotham', value: 6},
  {word: 'rope', value: 5},
  {word: 'computer', value: 3},
  {word: 'programming', value: 12},
  {word: 'c#', value: 17},
  {word: 'interval', value: 10},
  {word: 'intern', value: 27},
  {word: 'reality', value: 12},
  {word: 'trump', value: 10},
  {word: 'repo', value: 19},
  {word: 'god', value: 1},
  {word: 'cloud', value: 1},
];

const WORD_COUNT_KEY = 'value';
const WORD_KEY = 'word';

const SentimentWordCloud = () => {
  return (
    <div style={{width: 600, height: 400}}>
      <ReactWordCloud
	words={words}
	wordCountKey={WORD_COUNT_KEY}
	wordKey={WORD_KEY}
      />
    </div>
  );
};

export { SentimentBubbleChart }
export { SentimentBarGraph }
export { SentimentWordCloud }
