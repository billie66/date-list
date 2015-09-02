import _ from 'underscore';
import React from 'react';

class Box extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      names: props.group,
      number: props.number,
      date: props.date
    };
  }

  render() {
    var names = _.map(this.state.names, (name, index) => {
      var url = '';
      var mark = '';
      if (name !== '') {
        url = `http://media.haoduoshipin.com/modern/team/${name}.jpg`;
        mark = name;
      } else {
        url = 'http://media.haoduoshipin.com/modern/team/default.jpg';
        mark = 'null';
      }
      return (
        <li className="avatar" key={index}>
          <img src={url} />
          <div className="name">{mark}</div>
        </li>
      );
    });

    return (
      <div className="box-wrapper">
        <div className="number">{this.state.number}</div>
        <div className="date">{this.state.date}</div>
        <ul className="box clearfix">
          {names}
        </ul>
      </div>
    );
  }
};

export default Box;
