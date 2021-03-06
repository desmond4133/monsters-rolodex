import React from 'react';
import { Cardlist } from './Components/Card-list/card-list.component';
import './App.css';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends React.Component {
constructor() {
  super();
  this.state = { 
    monsters: [],
    searchField: ''
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({ monsters: users}));
}

handleChange = (e) => {
  this.setState({ searchField : e.target.value});
}
 
render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return(
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange= {this.handleChange}
      />
      <Cardlist monsters= {filteredMonsters}/>
    </div>
  )
};





}
  

export default App;
