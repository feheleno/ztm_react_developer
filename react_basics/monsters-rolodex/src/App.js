import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: '0001',
          name: 'Linda',
        },
        {
          id: '0002',
          name: 'Frank',
        },
        {
          id: '0003',
          name: 'Jacky',
        },
      ]  
    };
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          }
        )}
      </div>
    );
  }
}

export default App;
