
import { useState } from 'react';
import './App.css';
import AddNewMovies from './Components/AddNewMovies';
import FilterByRate from './Components/FilterByRate';
import ListOfMovies from './Components/ListOfMovies';
import NavBar from './Components/NavBar';
import { moviesData } from './data';


function App() {
  const [movies, setmovies] = useState(moviesData);
  const [inputSearch, setinputSearch] = useState('');
  const add=(AddNewMovie)=>{
    return setmovies([...movies,AddNewMovie])
  }
  const [Rate, setRate] = useState(1);
 
  return (
    <div className="App">
  <FilterByRate isRating={false} Rates={Rate} setRate={setRate}/>
      <AddNewMovies add={add}   />
    <NavBar inputs={inputSearch} setInput={setinputSearch} />
    <ListOfMovies movie={movies} inputSearch={inputSearch} rating={Rate} />
   
    </div>
  );
}

export default App;
