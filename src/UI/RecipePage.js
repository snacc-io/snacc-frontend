import React, { useState, useEffect } from "react";
import "./../components/Recipe.css";
import Rating from "@material-ui/lab/Rating";
import { useParams } from "react-router-dom";

function Recipe() {
  const {recipePageResponse, setRecipePageResponse} = useState([]);

  const [title, setTitle] = useState("testTitle");
	const [titleBlurb, setTitleBlurb] = useState("");
	const [description, setDescription] = useState("testDescription");
	const [image, setImage] = useState("https://pro2-bar.myportfolio.com/v1/assets/f015544c-b38d-49fc-a1d1-7e906e042eee/1eff550b-2fe8-43a0-bc5c-d1771d4a4840_rw_1920.jpg?h=1270724a86b5a957115c200af1d66551");
	const [author, setAuthor] = useState("testAuthor");
	const [views, setViews] = useState(9999999);
	const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(999999);
	const [cookingTime, setCookingTime] = useState(99999);
	const [ingredientList, setIngredientList] = useState(["testIngredient1", "testIngredient2", "testIngredient3", "testIngredient4", "testIngredient5"]);
	const [instructionList, setInstructionList] = useState(["testInstruction1", "testInstruction2", "testInstruction3", "testInstruction4", "testInstruction5"]);
	const [reviews, setReviews] = useState(["testReview1", "testReview2", "testReview3", "testReview4", "testReview5"]);
  const [reviewCount, setReviewCount] = useState(999999);

  const {username, recipe_name} = useParams();

  // useEffect(() => {
  //   Axios.get(`${api.url}/api/Recipes`).then((response) => {
  //     setQueryResponse(response.data);
  //   });
  // }, []);

  return (
    <div>
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">
          {title}
        </h2>
        <Rating name="read-only" value={rating} readOnly />
        <span> {ratingCount} Ratings | {reviewCount} Reviews</span>
        <p className="lead">{description}</p>
        <h3>By {author}</h3>
        <br/>
      </div>
      <div className="row featurette">
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto square-500"
            src={image}
          />
        </div>
        <div>
          <h5>Cooking Time: <span>{cookingTime}</span></h5>
        </div>
      </div>
      <hr/>
      <div>
        {/* ingredients */}
        <h3>Ingredients</h3>
        <ul>
          {ingredientList.map((ingredient) => {
            return(<li>{ingredient}</li>);
          })}
        </ul>
      </div>
      <hr/>
      <div>
        {/* instruction */}
        <h3>instructions</h3>
        <ul>
          {instructionList.map((instruction, i) => {
            return(<li>Step {i+1}<br/>{instruction}</li>);
        })}
        </ul>
      </div>
      <hr/>
      <div>
        {/* reviews */}
        {reviews.map((review) => {
          return(<h4>{review}</h4>);
        })}
      </div>
    </div>
  );
}

export default Recipe;
