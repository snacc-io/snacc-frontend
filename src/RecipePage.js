import React from "react";
import "./Recipe.css";
import Rating from "@material-ui/lab/Rating";

function Recipe({ id, title, titleBlurb, description, image, rating }) {
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">
          {title}: <span className="text-muted">{titleBlurb}</span>
        </h2>
        <Rating name="read-only" value={rating} readOnly />
        <p className="lead">{description}</p>
      </div>
      <div className="col-md-5">
        <img
          className="featurette-image img-fluid mx-auto square-500"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
}

export default Recipe;
