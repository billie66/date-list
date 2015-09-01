import './main.css';
import _ from 'underscore';
import React from 'react';

class Box extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      names: props.group
    };
  }

  render() {
    var names = _.map(this.state.names, (name, index) => {
      if (name !== '') {
        var image = `http://media.haoduoshipin.com/modern/avatar/${name}.jpg`;
        return (
          <li className="avatar" key={index}>
            <img src={image} />
            <div className="name">billie66</div>
          </li>
        );
      } else {
        var image = 'http://media.haoduoshipin.com/modern/avatar/default.jpg'
        return (
          <li className="avatar" key={index}>
          <img src={image} />
          </li>
        );
      }
    });

    return (
      <div className="box-wrapper">
        <ul className="box clearfix">
          {names}
        </ul>
      </div>
    );
  }
};

export default Box;
