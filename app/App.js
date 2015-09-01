import _ from 'underscore';
import React from 'react';
import Box from './Box.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      groups: {
        one: ['peter','','','','',''],
        two: ['peter','','peter','','',''],
        three: ['billie66','peter','','','',''],
        four: ['peter','','','','',''],
        five: ['','','','peter','','']
      }
    };
  }
  render(){
    var boxes = _.map(this.state.groups, (g, key) => {
      return <Box group={g} key={key} />
    });

    return (
      <div className="boxes-area clearfix">
        {boxes}
      </div>
    );
  }
};

React.render(<App />, document.getElementById('app'));
