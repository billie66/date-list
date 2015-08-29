import React from 'react';

class App extends React.Component{
  getInitialState() {
    return {
      names: ["billie"]
    };
  },

  render() {
    return (
      <div className="profiles-container">
        <ul>
          {this.state.names}
        </ul>

      </div>
    )
  }
};

React.render(<App />, document.getElementById('app'));
