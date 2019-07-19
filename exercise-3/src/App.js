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
      ],
      endTime: 720,
      bubblestoReset: null,
      idOfTheGame: null
    }
  }

  componentDidMount() {
    if (this.state.bubblestoReset === null) {
      this.setState({
        bubblestoReset: [...this.state.bubbles]
      });
    }
    this.onStartTheGame();
  }

  componentWillUpdate() {
    if (this.state.endTime === 0)
      this.onEndTheGame();
  }

  onResetTheGame = () => {
    clearInterval(this.state.idOfTheGame);
    this.setState({
      bubbles: [...this.state.bubblestoReset],
      endTime: 720
    });
    this.onStartTheGame();
  }

  onStartTheGame = () => {
    var idOfTheGame = setInterval(() => {
      var { bubbles } = this.state;
      //Filter the bubbles reach the bottom
      bubbles = bubbles.filter(bubble => bubble.numOfDaysSinceLastConnected < 30);
      bubbles = bubbles.map(bubble => {
        var newRenewal = bubble.numOfDaysToRenewal <= 0 ? 360 : bubble.numOfDaysToRenewal - 1;
        var newLastConnected = bubble.numOfDaysSinceLastConnected >= 30 ? 0 : bubble.numOfDaysSinceLastConnected + 1;
        return {
          ...bubble,
          numOfDaysToRenewal: newRenewal,
          numOfDaysSinceLastConnected: newLastConnected
        }
      })
      this.setState({
        bubbles: [...bubbles],
        endTime: this.state.endTime - 1
      });
    }, 1000 / 6);

    this.setState({
      idOfTheGame: idOfTheGame
    });
  }

  onEndTheGame = () => {
    clearInterval(this.state.idOfTheGame);
    alert('Kết thúc trò chơi!');
  }

  onUpdateBubble =  (event, index) => {
    var { bubbles } = this.state;
    bubbles[index] = {
      ...bubbles[index],
      numOfDaysSinceLastConnected: 0
    };
    this.setState({
      bubbles: [...bubbles]
    });
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
            key={index}
            className={`b-${index + 1} ${level}`}
            style={{
              top: `${coordinatesY}px`,
              right: `${coordinatesX}px`,
              width: `${sizeBubble}px`,
              height: `${sizeBubble}px`
            }}
            onClick={(event) => this.onUpdateBubble(event, index)}
          />
        )
      });
    }
    else {
      elmBubbles = <h1 className="game-over">Game Over!</h1>;
      this.onEndTheGame();
    }
    return elmBubbles;
  }

  render() {
    const { bubbles } = this.state;
    return (
      <div className="App">
        <div className="btn btn-primary m-1 ml-5" onClick={this.onResetTheGame}>Reset Game</div>
        <div className="playground">
          {this.onShowBubbles(bubbles)}
        </div>
      </div >
    );
  }
}

export default App;
