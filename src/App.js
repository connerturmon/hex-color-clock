import React from 'react';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      showTimeString: false
    }
    // Used to clean up resources.
    this.intervalRef = null;
  }

  toggleTimeString = () => {
    // This is not a necessity, but will toggle between
    // the hex color code time and regular time when you
    // click on the clock.
    this.setState((previousState, props) => ({ showTimeString: !previousState.showTimeString }));
  }

  componentWillMount() {
    // Get the initial time upon loading the page.
    this.setState({ time: new Date() });

    // Get the current time every second.
    this.intervalRef = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval to clean up.
    clearInterval(this.intervalRef);
  }

  render() {
    // Convert time into strings.
    let seconds = this.state.time.getSeconds().toString();
    let minutes = this.state.time.getMinutes().toString();
    let hours = this.state.time.getHours().toString();
    // Make sure that the string is at least 2 digits
    // so that it is a valid hex code.
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (hours.length < 2) {
      hours = '0' + hours;
    }

    // Using the beauty and magic of template literals,
    // we create a hex color code based on the time.
    // This gets passed to our main container using React's
    // 'style' attribute.
    let backgroundColor = `#${hours}${minutes}${seconds}`;
    
    return (
      <div className="app-container" style={{ background: backgroundColor }}>
        { this.state.showTimeString &&
          <h1 className="hex-clock" onClick={this.toggleTimeString}>
            {this.state.time.toLocaleTimeString()}
          </h1>
        }
        { !this.state.showTimeString &&
          <h1 className="hex-clock" onClick={this.toggleTimeString}>
            {backgroundColor}
          </h1>
        }
      </div>
    )
  }
}

export default App;