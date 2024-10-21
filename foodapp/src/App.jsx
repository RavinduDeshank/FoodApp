import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import "./App.css";
import InnerComponent from "./Components/InnerComponent";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerComponent>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerComponent>
        <InnerComponent>
          <FoodDetails foodId={foodId} />
        </InnerComponent>
      </Container>
    </div>
  );
}

export default App;
