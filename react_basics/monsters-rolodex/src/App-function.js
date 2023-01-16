import { useState, useEffect } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState(''); //useState generates an array [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    // monsters = [{name: 'Leanne'}, {name: 'Clementine'}]
    const newfilteredMonsters = monsters.filter((filteredMonster) => {
      return filteredMonster.name.toLocaleLowerCase().includes(searchField)
    });
    // input = 'Lea' => filteredMonsters = [{name: 'Leanne'}]

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // async function getMonsters() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const users = await response.json();

  //   setMonsters(users);
  // }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monster-search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
