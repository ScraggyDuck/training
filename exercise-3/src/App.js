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
          healthy: 7.63,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 90,
          numOfDaysSinceLastConnected: 24,
          amountPaid: 60,
          healthy: 3.23,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 70,
          numOfDaysSinceLastConnected: 10,
          amountPaid: 52,
          healthy: 5.2,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 300,
          numOfDaysSinceLastConnected: 20,
          amountPaid: 40,
          healthy: 9.93,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 321,
          numOfDaysSinceLastConnected: 25,
          amountPaid: 80,
          healthy: 10,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 234,
          numOfDaysSinceLastConnected: 17,
          amountPaid: 34,
          healthy: 2,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 112,
          numOfDaysSinceLastConnected: 23,
          amountPaid: 54,
          healthy: 7,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 245,
          numOfDaysSinceLastConnected: 11,
          amountPaid: 28,
          healthy: 3.6,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 98,
          numOfDaysSinceLastConnected: 13,
          amountPaid: 42,
          healthy: 0,
          timeUpdateHealthy: 12
        },
        {
          numOfDaysToRenewal: 39,
          numOfDaysSinceLastConnected: 4,
          amountPaid: 70,
          healthy: 8.9,
          timeUpdateHealthy: 12
        }
      ],
      endTime: 720,
      bubblestoReset: null,
      idOfTheGame: null,
      score: 0
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
      endTime: 720,
      score: 0
    });
    this.onStartTheGame();
  }

  onStartTheGame = () => {
    var idOfTheGame = setInterval(() => {
      var { bubbles, score } = this.state;
      //Filter the bubbles reach the bottom
      bubbles = bubbles.filter(bubble => bubble.numOfDaysSinceLastConnected < 30);
      //Filter the bubbles reach the right(heathy >= 3.5 && numOfDaysToRenewal <= 0)
      for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].numOfDaysToRenewal <= 0 && bubbles[i].healthy < 3.5) {
          bubbles.splice(i, 1);
        }
      }
      //Render
      bubbles = bubbles.map(bubble => {
        var newHealthy = bubble.healthy + Math.random() * 0.01 - 0.05;
        var newRenewal = bubble.numOfDaysToRenewal <= 0 ? 360 : bubble.numOfDaysToRenewal - 1;
        var newLastConnected = bubble.numOfDaysSinceLastConnected + 1;
        return {
          ...bubble,
          healthy: newHealthy > 0 && newHealthy < 10 ? newHealthy : bubble.healthy,
          numOfDaysToRenewal: newRenewal,
          numOfDaysSinceLastConnected: newLastConnected,
          timeUpdateHealthy:
            bubble.timeUpdateHealthy < 12
              ? bubble.timeUpdateHealthy + 1
              : bubble.timeUpdateHealthy
        }
      })
      //Score
      for (let i = 0; i < bubbles.length; i++) {
        score += bubbles[i].healthy;
      }
      //Udate state
      this.setState({
        bubbles: [...bubbles],
        endTime: this.state.endTime - 1,
        score: score
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

  onUpdateBubble = (event, index) => {
    const { bubbles } = this.state;
    if (event.altKey) {
      //Update healthy
      if (bubbles[index].timeUpdateHealthy === 12) {
        bubbles[index] = {
          ...bubbles[index],
          healthy:
            bubbles[index].healthy + 2 > 10 ? bubbles[index].healthy : bubbles[index].healthy + 2,
          timeUpdateHealthy: 0
        };
      } else {
        alert("Update tối đa 2 giây!");
      }
    } else {
      bubbles[index] = {
        ...bubbles[index],
        numOfDaysSinceLastConnected: 0
      };
    }
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
    const { bubbles, score } = this.state;
    return (
      <div className="App">
        <div className="header">
          <div className="btn btn-primary" onClick={this.onResetTheGame}>Reset Game</div>
          <div className="score"><h2>Score: {score}</h2></div>
        </div>
        <div className="playground">
          {this.onShowBubbles(bubbles)}
        </div>
      </div >
    );
  }
}

export default App;
