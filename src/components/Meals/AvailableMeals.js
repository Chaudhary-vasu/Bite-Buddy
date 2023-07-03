import { useEffect, useState } from "react";

import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import BASE_URL from "../../api/api";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${BASE_URL}/meals-item/`);

      let responseData = await response.json();
      if (response.ok) {
        responseData = responseData.data;
      }

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      setMeals(responseData);
      setIsLoading(false);
    };

    //For error handling dont use try catch.
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
      <>
        <ul>{mealsList}</ul>
      </>
  );
};

export default AvailableMeals;
