import React, { useEffect, useState } from "react";
import { WEBSITE_BASE_URL } from "../../../api/api";
import classes from "../MealItem/MealDetails.module.css";
import BreadCrumbs from "./BreadCrumbs";

function MealsDetails() {
  const [meal, setMeal] = useState(null);
  const [isDataFetch, setIsDataFetch] = useState(false);

  // Extract the meal ID from the URL
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const mealId = urlParts[urlParts.length - 1];

  const fetchMeal = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/meals-item/${mealId}/`
      );
      const data = await response.json();
      setMeal(data?.data);
      setIsDataFetch(true);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  useEffect(() => {
    if (!isDataFetch) {
      fetchMeal();
    }
  }, [isDataFetch]);

  const detailPage = (
    <>
      <div className={classes.mealdetails}>
        <img src={WEBSITE_BASE_URL + meal?.image} alt={meal?.name} />
        <h1>{meal?.name}</h1>
        <p>Price: {meal?.price}</p>
        <p>Description: {meal?.description}</p>
      </div>
    </>
  );
  return (
    <div>
      <BreadCrumbs/>
      {!isDataFetch && <>Loading</>}
      {isDataFetch && detailPage}
    </div>
  );
}

export default MealsDetails;
