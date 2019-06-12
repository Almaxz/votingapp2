import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        { name: "Mage", votes: 0 },
        { name: "Archer", votes: 0 },
        { name: "Priest", votes: 0 },
        { name: "Warrior", votes: 0 },
        { name: "Paladin", votes: 0 },
        { name: "Assassin", votes: 0 },
        { name: "Barbarian", votes: 0 },
      ]
    };
  }

  vote = i => {
    let newchar = [...this.state.classes];
    newchar[i].votes++;
    const swap = (array, i, j) => {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    const bubbleSort = array => {
      for(let i = array.length - 1; i >= 0; i--) {
        for(let j = array.length - 2; j >= 0; j--) {
          if(array[j + 1].votes > array[j].votes) {
              swap(array, j + 1, j);
          }
        }
      }
      return array;
    }
    bubbleSort(newchar);
    this.setState({classes: newchar});
  }
    
  render () {
    return (
      <div>
        <h1>Vote for Characters!</h1>
        <div className="content">
          {
            this.state.classes.map( (c, i) =>
              <div className="content1" key={i}> 
                <h4>
                  {c.name}
                </h4>
                <button onClick={this.vote.bind(this, i)}>
                  Likes: {c.votes}
                </button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
