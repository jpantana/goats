import React from 'react';

import goats from './goats';

import './App.scss';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({goats})
  }

  render() {
    // javascripty things here
    return (
      <div className="App">
        <div className="">Goat yoga</div>
        {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
