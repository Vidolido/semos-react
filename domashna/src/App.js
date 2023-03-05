import './App.css';
import { useState } from "react";

// import CarsForSale from "./components/CarComponents/CarsForSale";
// import UserCars from "./components/CarComponents/UserCars";
import MainComponent from './components/FormComponents/MainComponent';


function App() {
  const [userBuy, setUserBuy] = useState(['Opel', 'Ford']);

  return (
    <div className="App">
      {/* <CarsForSale userBuy={userBuy} setUserBuy={setUserBuy} /> */}
      {/* <UserCars userBuy={userBuy} setUserBuy={setUserBuy} /> */}
      <MainComponent />
    </div>
  );
}

export default App;
