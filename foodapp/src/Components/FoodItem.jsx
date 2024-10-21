import Styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div key={food.id} className={Styles.foodItemContainer}>
      <h1 className={Styles.foodItemTitle}>{food.title}</h1>
      <div className={Styles.foodItemImg}>
        <img src={food.image} alt="" />
      </div>
      <div className={Styles.foodItembtnCon}>
        <button
          className={Styles.foodItembtn}
          onClick={() => {
            setFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
