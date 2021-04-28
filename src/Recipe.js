import React from "react";
import "./Recipe.css";
import { useStateValue } from "./StateProvider";

function Recipe({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const openRecipe = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="recipe">
      <div className="recipe__info">
        <p>{title}</p>
        <div className="recipe__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={openRecipe}>View Recipe</button>
    </div>
  );
}

export default Recipe;