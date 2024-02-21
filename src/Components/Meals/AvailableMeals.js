import React from 'react'
import classes from "./AvailableMeals.module.css"
const meals = [
    {mealName:"Sushi",desc:"Finest fish and veggies",price:"$22.99"},
    {mealName:"Schnitzel",desc:"A german specialty!",price:"$16.50"},
    {mealName:"Barbecue Burger",desc:"American, raw, meaty",price:"$12.99$"},
    {mealName:"Green Bowl",desc:"Healthy. and green...",price:"$20.99"},
]
function AvailableMeals() {
  return (
    <>
        <div className={classes['meals-showing-container']}>
            {meals.map((meal)=>(
                <div className={classes.mealsShowing}> 
                      <span><h4>{meal.mealName}</h4></span> 
                      <span>{meal.desc}</span>
                      <span className={classes.price}>{meal.price} </span> 
                </div>
            ))}
        </div>
    </>
  )
}

export default AvailableMeals