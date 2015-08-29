require("./main.css");
var React = require('react');

var Box = React.createClass({
  getInitialState: function() {
    return {
      names: this.props.group
    };
  },

  render: function() {
    var names = this.state.names.map(function(name, index) {
      if (name !== '') {
        var image = 'http://media.haoduoshipin.com/modern/avatar/' + name + '.jpg';
        return (
            <li className="profile" key={index}>
              <img src={image} />
            </li>
          );
      } else {
        return (<li className="profile" key={index}></li>);
      }
    });

    return (
      <div className="profiles-wrapper">
        <ul className="clearfix">
          {names}
        </ul>
      </div>
    );
  }
});

module.exports = Box;
