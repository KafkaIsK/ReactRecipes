import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Ingredients:</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Calories = {calories.toFixed(0)} kcal</h3>
            <img className={style.image} src={image} alt={style.recipe} />
        </div>
    );
};

export default Recipe;