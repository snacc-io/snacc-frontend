import React from "react";
import "./CreateRecipe.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
//import CreateRecipe from "./CreateRecipe";

function CreateRecipe() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="CreateRecipe">
      <div className="CreateRecipe__left">
        <img
          className="CreateRecipe__ad"
          src="#todo"
          alt="ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="CreateRecipe__title">Your shopping basket</h2>

          {basket.map((item) => (
            <CreateRecipe
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="CreateRecipe__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CreateRecipe;
