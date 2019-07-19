import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [
        {
          numOfDaysToRenewal: 30,
          numOfDaysSinceLastConnected: 12,
          amountPaid: 50,
          healthy: 7.63
        },
        {
          numOfDaysToRenewal: 90,
          numOfDaysSinceLastConnected: 24,
          amountPaid: 60,
          healthy: 3.23
        },
        {
          numOfDaysToRenewal: 70,
          numOfDaysSinceLastConnected: 10,
          amountPaid: 52,
          healthy: 5.2
        },
        {
          numOfDaysToRenewal: 300,
          numOfDaysSinceLastConnected: 20,
          amountPaid: 40,
          healthy: 9.93
        },
        {
          numOfDaysToRenewal: 321,
          numOfDaysSinceLastConnected: 25,
          amountPaid: 80,
          healthy: 10
        },
        {
          numOfDaysToRenewal: 234,
          numOfDaysSinceLastConnected: 17,
          amountPaid: 34,
          healthy: 2
        },
        {
          numOfDaysToRenewal: 112,
          numOfDaysSinceLastConnected: 23,
          amountPaid: 54,
          healthy: 7
        },
        {
          numOfDaysToRenewal: 245,
          numOfDaysSinceLastConnected: 11,
          amountPaid: 28,
          healthy: 3.6
        },
        {
          numOfDaysToRenewal: 98,
          numOfDaysSinceLastConnected: 13,
          amountPaid: 42,
          healthy: 0
        },
        {
          numOfDaysToRenewal: 39,
          numOfDaysSinceLastConnected: 4,
          amountPaid: 70,
          healthy: 8.9
        }
      ]
    }
  }

  onShowBubbles = bubbles => {
    var elmBubbles = null;
    if (bubbles.length > 0) {
      elmBubbles = bubbles.map((bubble, index) => {
        var level = (bubble.healthy >= 7.5 ? 'healthy-good' : (bubble.healthy < 3.5 ? 'healthy-bad' : 'healthy-medium'));
        var sizeBubble = bubble.amountPaid;
        var coordinatesX = bubble.numOfDaysToRenewal * 4 - sizeBubble / 2;
        var coordinatesY = bubble.numOfDaysSinceLastConnected * 20 - sizeBubble / 2;
        return (
          <div
            className={`b-${index + 1} ${level}`}
            style={{
              top: `${coordinatesY}px`,
              right: `${coordinatesX}px`,
              width: `${sizeBubble}px`,
              height: `${sizeBubble}px`
            }}
          />
        )
      });
    }
    else {
      elmBubbles = <h1 className="game-over">Game Over!</h1>;
    }
    return elmBubbles;
  }

  render() {
    const { bubbles } = this.state;
    return (
      <div className="App">
        <div className="playground">
          {this.onShowBubbles(bubbles)}
        </div>
      </div >
    );
  }
}

export default App;
