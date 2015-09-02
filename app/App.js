import './main.css';
import _ from 'underscore';
import React from 'react';
import Box from './Box.js';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      groups: {
        one: {names: ['peter','alex','bryan','fulei','hikaru','jiangfan'], number: '001', date: '九月三号星期三晚上 8:00-9:00'},
        two: {names: ['peter','jinxin','kathy','kimmg','koi','peter'], number: '002', date: 'sihsdfjk sdfksd fdsf'},
        three: {names: ['peter','ronghai','ryan','seaborn','seanjsong','shajun'], number: '', date: ''},
        four: {names: ['peter','shooter','taylor','wuqi','xiaoping','yartoo'], number: '', date: ''},
        five: {names: ['peter','yingchang','zhenhappy','','',''], number: '', date: ''}
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
