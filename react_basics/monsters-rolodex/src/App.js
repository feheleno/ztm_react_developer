import { Component } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //Lyfecycle Method which executes only one time, that is, it executes only when the component mounts
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // monsters = [{name: 'Leanne'}, {name: 'Clementine'}]
    const filteredMonsters = monsters.filter((filteredMonster) => {
      return filteredMonster.name.toLocaleLowerCase().includes(searchField)
    });
    // input = 'Lea' => filteredMonsters = [{name: 'Leanne'}]

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className='monster-search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
