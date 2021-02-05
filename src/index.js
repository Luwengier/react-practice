// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude })
      },
      err => {
        this.setState({errorMessage: err.message})
      }
    );
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
    console.log('My component was render to the screen');
  }

  componentDidUpdate() {
    console.log('My component was just update - it rerendered!')
  }

}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
