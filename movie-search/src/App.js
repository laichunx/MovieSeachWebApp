import './App.css';
import React from "react";
import SearchMovie from "./searchMovies";


function App() {
  return (
    <div className="container">
      <h1 className="title mb-5"> Movie Search </h1>
      <SearchMovie/>
    </div>
  );
}

export default App;
