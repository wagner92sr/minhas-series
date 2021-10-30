import React, { useState, useEffect } from "react";
import Header from "./Header";
import Genres from "./Genres";
import EditGenre from "./EditGenre";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NewGenre from "./NewGenre";

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Genres} />
        <Route path='/generos/novo' exact component={NewGenre} />
        <Route path='/generos/:id' exact component={EditGenre} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>

  );
}

export default App;
