import { useState, useEffect } from "react";

// import { Student } from "./components/Student";

// import { Counter } from "./components/Counter";
// import { Dates } from "./components/Dates";
// import { StateTutorial } from "./components/StateTutorial";

// const data = [
//   {
//     ime: "Jovche",
//     prezime: "Jovchevski",
//     index: 12345
//   },
//   {
//     ime: "Borche",
//     prezime: "Borchevski",
//     index: 56789
//   },
//   {
//     ime: "Boshko",
//     prezime: "Boshkovski",
//     index: 11234
//   },
// ];

function App() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    console.log("Inside useEffect");
  }, []);
  
  return (
    <div className="App">
      {/* <Student studenti={data} semestar={'Leten'} /> */}
      {/* <StateTutorial /> */}
      {/* <Dates /> */}
      {/* <Counter /> */}
      <input 
        type="text" 
        placeholder="enter Username" 
        value={username} 
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <input 
        type="text" 
        placeholder="enter password"
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
      />

      <p>username: {username}</p>
      <p>password: {password}</p>

    </div>
  );
}

export default App;
