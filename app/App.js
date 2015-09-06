import './main.css';
import _ from 'underscore';
import React from 'react';
import Box from './Box.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      groups: window.groups
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
