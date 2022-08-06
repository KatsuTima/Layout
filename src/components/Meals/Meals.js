import { AvailableMeals } from "./AvailableMeals";
import { MealItem } from "./MealItem";
import { MealsSummary } from "./MealsSummary";

export const Meals = () => {
  return (
    <>
      <AvailableMeals />
      <MealsSummary />
      {/* <MealItem /> */}
    </>
  );
};
