import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchField, setSeachField] = useState("");   //[value,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);          //it will return true or false
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters,searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSeachField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return {monsters: users }
//         },

//       )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   }

//   render() {
//     const {monsters, searchField} = this.state;                              //destructing
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monsters) => {
//       return monsters.name.toLocaleLowerCase().includes(searchField);          //it will return true or false
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

// }

export default App;
