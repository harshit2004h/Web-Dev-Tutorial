import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [card, setcard] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let r = await a.json();
    setcard(r);
    console.log(r);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        {card.map((params) => {
          return (
            <div key={params.userId} className="outer">
              <div className="content">
                <div style={{fontSize:'18px',fontWeight: 'bold', textAlign:'justify'}}>{params.id}   {params.title}</div>
              </div>
              <div style={{textAlign: 'justify'}}>{params.body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
