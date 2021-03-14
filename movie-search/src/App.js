import './App.css';
import React from "react";
import SearchMovie from "./searchMovies";


function App() {
  function setBackground(){
    document.body.style = 'background: #575757;';
  }
  return (
    <div className="container">
      {setBackground()}
      <h1 className="title mb-5"> Movie Search </h1>
      <SearchMovie/>
    </div>
  );
}

export default App;
