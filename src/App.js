import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestion]=useState(data);
  return (
    <div className="container">
      <h3>question answer about login</h3>
      <section className="info">
      {question.map((iterate)=>{
        return <SingleQuestion key={iterate.id}{...iterate}/>
      })}
      </section>
    </div>
  );
}

export default App;
