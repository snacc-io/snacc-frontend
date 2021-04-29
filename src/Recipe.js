import React from "react";
import "./Recipe.css";

function Recipe({ id, title, titleBlurb, description, image, rating }) {




  return (
    

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">{title}: <span className="text-muted">{titleBlurb}</span></h2>
              <div className="recipe__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>🌟</p>
                  ))}
              </div>
              <p className="lead">{description}</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto square-500"
                src={image}
                alt={title}/>
        </div>
    </div>
    

  );
}

export default Recipe;