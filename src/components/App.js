import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { SearchProvider } from "./SearchState";

function App() {
  return (
    <div className="app">
      <SearchProvider>
       <Header />
       <ListingsContainer />
      </SearchProvider>
    </div>
  );
}

export default App;
