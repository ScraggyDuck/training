import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: [
        {
          top: 0,
          left: 0,
          healthy: 7.63,
          timeUpdateHealthy: 12
        },
        {
          top: 48,
          left: 24,
          healthy: 3.23,
          timeUpdateHealthy: 12
        },
        {
          top: 72,
          left: 1400,
          healthy: 5.2,
          timeUpdateHealthy: 12
        },
        {
          top: 72,
          left: 1000,
          healthy: 9.93,
          timeUpdateHealthy: 12
        },
        {
          top: 16,
          left: 800,
          healthy: 10,
          timeUpdateHealthy: 12
        },
        {
          top: 80,
          left: 1360,
          healthy: 2,
          timeUpdateHealthy: 12
        },
        {
          top: 0,
          left: 720,
          healthy: 7,
          timeUpdateHealthy: 12
        },
        {
          top: 16,
          left: 360,
          healthy: 3.6,
          timeUpdateHealthy: 12
        },
        {
          top: 80,
          left: 360,
          healthy: 0,
          timeUpdateHealthy: 12
        },
        {
          top: 16,
          left: 180,
          healthy: 8.9,
          timeUpdateHealthy: 12
        }
      ],
      intervalId: null,
      score: 0.0
    }
  }

  componentDidMount() {
    this.onStart();
    setTimeout(this.onEnd, 120000);
  }

  onStart = () => {
    var intervalId = setInterval(() => {
      var { bubbles, score } = this.state;
      //Filter the bubbles reach the bottom
      bubbles = bubbles.filter(bubble => bubble.top < 240);
      //Filter the bubbles reach the right(heathy >= 3.5 && left < 1440)
      for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].left > 1440 && bubbles[i].healthy < 3.5) {
          bubbles.splice(i, 1);
        }
      }
      //Render
      bubbles = bubbles.map(bubble => {
        var result = bubble.healthy + Math.random() * 0.01 - 0.05;
        return {
          top: bubble.top + 8,
          left: bubble.left > 1440 ? 0 : bubble.left + 4,
          healthy: result > 0 && result < 10 ? result : bubble.healthy,
          timeUpdateHealthy: bubble.timeUpdateHealthy < 12 ? bubble.timeUpdateHealthy + 1 : bubble.timeUpdateHealthy
        }
      }
      );
      //Score
      for (var i = 0; i < bubbles.length; i++) {
        score += bubbles[i].healthy;
      }
      //Update state
      this.setState({
        bubbles: [...bubbles],
        score: score
      });
    }, 1000 / 6);


    this.setState({
      intervalId: intervalId
    });
  };

  onEnd = () => {
    clearInterval(this.state.intervalId);
    alert('Trò chơi kết thúc!');
  }


  onShowBubble = (bubbles) => {
    var elmBubbles = null;
    if (bubbles.length > 0) {
      elmBubbles = bubbles.map((bubble, index) => {
        var className = (bubble.healthy > 7.5) ? "healthy-good" : ((bubble.healthy < 3.5) ? "healthy-bad" : "healthy-medium");
        return (
          <div
            key={index}
            className={`b-${index + 1} ${className}`}
            style={{
              top: `${bubble.top}px`,
              left: `${bubble.left}px`,
            }}
            onClick={(event) => this.onUpdateBubble(event, bubble, index)}
          />
        );
      })
    }
    else {
      elmBubbles = <h1 className="game-over">Game Over</h1>;
      this.onEnd();
    }
    return elmBubbles;
  }


  onUpdateBubble = (event, bubble, index) => {
    const { bubbles } = this.state;
    if (event.altKey) { //Update healthy
      if (bubble.timeUpdateHealthy === 12) {
        bubbles[index] = {
          ...bubble,
          healthy: (bubble.healthy + 2) > 10 ? bubble.healthy : bubble.healthy + 2,
          timeUpdateHealthy: 0
        }
      }
      else{
        alert('Update tối đa 2 giây!');
      }
    }
    else {
      bubbles[index] = {
        ...bubble,
        top: 0
      }
    }
    this.setState({
      bubbles: [...bubbles]
    });
  }

  render() {
    const { bubbles, score } = this.state;
    return (
      <div className="App">
        {/* <button className="btn btn-primary m-5" onClick={this.onEnd}>Kết thúc trò chơi!</button> */}
        <h1>Score: {score}</h1>
        <div className="playground">
          {this.onShowBubble(bubbles)}
        </div>
      </div >
    );
  }
}

export default App;
