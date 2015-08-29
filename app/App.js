var React = require('react');
require("./main.css");

var Box = React.createClass({
  getInitialState: function() {
    return {
      names: ['billie66', 'peter', '', '']
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

React.render(<Box />, document.getElementById('app'));
