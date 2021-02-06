// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: ''};
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude }),
      err => this.setState({errorMessage: err.message})
    );
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
