import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealGrid({ meals }) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => {
          if (meal.image.startsWith("/")) {
            return (
              <li key={meal.id}>
                <MealItem {...meal} />
              </li>
            );
          }
          return <></>;
        })}
      </ul>
    </>
  );
}
