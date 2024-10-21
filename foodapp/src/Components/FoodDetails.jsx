import { useEffect, useState } from "react";
import Styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5c81c88ad838472d84f0952a78eb3c52";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    if (foodId) {
      fetchFood();
    }
  }, [foodId]);

  return (
    <div>
      <div className={Styles.recipeCard}>
        <h1 className={Styles.recipeName}>{food.title}</h1>
        <img className={Styles.recipeImage} src={food.image} alt="" />
        <div className={Styles.recipeDetails}>
          <span>
            <strong>
              Ready in {food.readyInMinutes ? food.readyInMinutes : 0} Minutes{" "}
            </strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Veg" : "Non-Veg"}</strong>
          </span>
          <span>Serves : {food.servings ? food.servings : 0}</span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            Price per Serving : $
            {food.pricePerServing ? Math.round(food.pricePerServing / 100) : 0}
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} />
        <h2>Instructions</h2>
        <div className={Styles.recipeInstruction}>
          <ol>
            {food.analyzedInstructions &&
              food.analyzedInstructions.length > 0 &&
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
            {!food.analyzedInstructions ||
            food.analyzedInstructions.length === 0
              ? "No instructions available"
              : null}
          </ol>
        </div>
      </div>
    </div>
  );
}
