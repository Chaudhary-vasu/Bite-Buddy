import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import PageTitle from "../../UI/PageTitle";

const Meals = () => {
    <PageTitle title="Bite-Buddy | Home" />
    document.title = "Bite-Buddy | Home";
    return (
        <>
            <MealsSummary/>
            <AvailableMeals/>
        </>
    )
}
export default Meals;