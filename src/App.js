import React from 'react';
import './style.css';
import image from "./projet.jpg"
import image2 from "./projet2.jpg"

function App() {
  return (
    <div style={{border: "solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">My title</h1>
      <br />
      <img src={image} alt="img"/>
      <br />
      <img src={image2} alt="img" />
    </div>
  );
}

export default App;
