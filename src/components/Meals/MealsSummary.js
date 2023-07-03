import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Quicker bites, happier bites!"</h2>
      <p>
        <b>"Feed Your Cravings</b>: Discover a World of Flavors at Your Fingertips!"<br /> <br />
        <b>"Order with Ease</b>: Enjoy Delicious Meals Delivered Straight to Your Doorstep."
        <br /> <br />
        <b>"Satisfy Your Appetite</b>: Explore a Variety of Cuisines and Order Hassle-Free."
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealsSummary;
