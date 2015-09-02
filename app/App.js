import './main.css';
import _ from 'underscore';
import React from 'react';
import Box from './Box.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      groups: {
        one: {names: ['peter','','','','',''], number: '001', date: '九月三号星期三晚上 8：00-9：00'},
        two: {names: ['peter','','','','',''], number: '002', date: ''},
        three: {names: ['peter','','','','',''], number: '', date: ''},
        four: {names: ['peter','','','','',''], number: '', date: ''},
        five: {names: ['peter','','','','',''], number: '', date: ''}
      }
    };
  }
  render(){
    var boxes = _.map(this.state.groups, (g, key) => {
      return <Box group={g.names} key={key} date={g.date} number={g.number} />
    });

    return (
      <div className="boxes-area clearfix">
        {boxes}
      </div>
    );
  }
};

React.render(<App />, document.getElementById('app'));
