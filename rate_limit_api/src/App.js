import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [result, setresult] = useState("");
  const getdata = async () =>{
    const data = await fetch("http://localhost:3002/pingme");
    const res = await (data.json());
    setresult(res);
  } 

  useEffect(()=>{
    getdata();
  },[]);

  return ( 
    <div id="main"> {result}</div>
  );
}

export default App;
