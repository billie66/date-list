var _ = require('underscore');
var React = require('react');
var Box = require('./Box.js')


var App = React.createClass({
  getInitialState: function() {
    return {
      groups: {
        one: ['peter','','',''],
        two: ['','','peter',''],
        three: ['','peter','',''],
        four: ['peter','','',''],
        five: ['','','','peter']
      }
    };
  },

  render: function() {
    var boxes = _.map(this.state.groups, function(g, key){
      return <Box group={g} key={key} />
    });

    return (
      <div className="main">
        {boxes}
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
