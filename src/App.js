import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="Heading">
      Book Search Engine
      <div className="App">
        <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      </div></div>
  );
}

export default App;
