import React from 'react';
import Heading from './Component/Heading';
import Netflix from './Component/Netflix';
import Amazon from './Component/Amazon';
import './App.css';

let favOtt = prompt("Your favourite ott platform: Netflix or Amazon").toUpperCase();

const App = () => {
  return (<>
    <Heading ott={favOtt} />
    <div id="seriesContainer">
      {(favOtt === "NETFLIX") ? <Netflix /> : <Amazon />}
    </div>
  </>)
}

export default App;