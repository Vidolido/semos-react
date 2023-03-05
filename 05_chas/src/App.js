import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { CounterClass } from "./components/CounterClass";
// import { Todos } from "./components/Todos";
// import { Users } from "./components/Users";
import CarsForSale from "./components/CarsForSale";
import UserCars from "./components/UserCars";



function App() {
  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ]


  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Learn React", done: false },
  //   { id: 2, text: "Drink watter", done: true },
  // ]);
  // const [newTodo, setNewTodo] = useState("");

  // useEffect(() => {
  //   console.log(newTodo);
  // });

  // function addNewTodo() {
  //   let newObject = {
  //     text: newTodo,
  //     done: false,
  //     id: todos.length + 1,
  //   };
  //   setTodos([...todos, newObject]);
  //   setNewTodo("");
  // }

  // const markTodoAsDone = (todo) => {
  //   setTodos([
  //     ...todos.map(
  //       (item) =>
  //         item.id === todo.id // looking for the clicked element by id
  //           ? { id: item.id, text: item.text, done: !item.done } // if element is found
  //           : item // this goes for all the elements that are not changed
  //     ),
  //   ]);
  // };
  const [userBuy, setUserBuy] = useState(['Opel', 'Ford']);
  // console.log(userBuy)
  return (
    <div className="App">
      <h1>Hello from react!</h1>

      <CarsForSale userBuy={userBuy} setUserBuy={setUserBuy} />

      <UserCars userBuy={userBuy} setUserBuy={setUserBuy} />


      {/* <CounterClass /> */}
      {/* <input
        type="text"
        value={newTodo}
        placeholder="Enter new Todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <br />
      <button onClick={addNewTodo}>Add Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} /> */}
      {/* <Users data={data} /> */}


    </div>
  );
}

export default App;