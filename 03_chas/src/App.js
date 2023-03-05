import './App.css';
import { Comments } from './components/Comments';
// import Sport from './components/Sport';
const data = [
  {
    id: 1,
    autor: "Bole od Bolivud",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at aliquam perspiciatis. Numquam voluptas impedit error? Excepturi, sit facilis nostrum, ratione delectus reiciendis nihil sequi laudantium beatae tempora perspiciatis eaque."
  },
  {
    id: 2,
    autor: "Bole od Bolivud",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at aliquam perspiciatis. Numquam voluptas impedit error? Excepturi, sit facilis nostrum, ratione delectus reiciendis nihil sequi laudantium beatae tempora perspiciatis eaque."
  },
  {
    id: 3,
    autor: "Bole od Bolivud",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at aliquam perspiciatis. Numquam voluptas impedit error? Excepturi, sit facilis nostrum, ratione delectus reiciendis nihil sequi laudantium beatae tempora perspiciatis eaque."
  }
]

function App() {
  return (
    <div className="App">
      <h1>hello from react</h1>
      <Comments userComments={data} />
    </div>
  );
}

export default App;
