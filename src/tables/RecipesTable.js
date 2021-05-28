import React, { useState, useEffect } from "react";
import Axios from "axios";
import { api } from "../apiPath.js"

function RecipesTable() {
  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);

  const [recipeID, setRecipeID] = useState(0);
  const [userID, setUserID] = useState(0);
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookingTime, setCookingTime] = useState(0.0);
  const [views, setViews] = useState(0);
  const [rating, setRating] = useState(0);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    Axios.get(`${api.url}/api/Recipes`).then((response) => {
      setQueryResponse(response.data);
    });
  }, []);

  const insertRecipeQuery = () => {
    Axios.post(`${api.url}/api/Recipes/Insert`, {
      recipeID: recipeID,
      userID: userID,
      recipeName: recipeName,
      recipeDescription: recipeDescription,
      recipeInstructions: instructions,
      cookingTime: cookingTime,
      views: views,
      rating: rating,
      recipeImageURL: imageURL,
    }).then((response) => {
      if (response.data) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse,
          {
            recipeID: recipeID,
            userID: userID,
            recipeName: recipeName,
            recipeDescription: recipeDescription,
            instructions: instructions,
            cookingTime: cookingTime,
            views: views,
            rating: rating,
            imageURL: imageURL,
          },
        ]);
      } else alert("Failed query");
    });
  };

  const updateQuery = (ID) => {};

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Recipes/Delete`, {
        id: ID,
      }).then((response) => {
        if (response) {
          alert("successful query");
          setQueryResponse(
            queryResponse.filter((val) => {
              return val.recipeID !== ID;
            })
          );
        } else alert("Failed query");
      });
    };
  };

  return (
    <div className="home__container">
      <div className="container my-5">
        <form>
          <div className="form-row">
            <div className="col">
              <label>recipeID</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeID"
                name="recipeID"
                onChange={(e) => {
                  setRecipeID(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>userID</label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
                name="userID"
                onChange={(e) => {
                  setUserID(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>recipeName</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeName"
                name="recipeName"
                onChange={(e) => {
                  setRecipeName(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>recipeDescription</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeDescription"
                name="recipeDescription"
                onChange={(e) => {
                  setRecipeDescription(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>instructions</label>
              <input
                type="text"
                className="form-control"
                placeholder="instructions"
                name="instructions"
                onChange={(e) => {
                  setInstructions(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>cookingTime</label>
              <input
                type="text"
                className="form-control"
                placeholder="cookingTime"
                name="cookingTime"
                onChange={(e) => {
                  setCookingTime(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>views</label>
              <input
                type="text"
                className="form-control"
                placeholder="views"
                name="views"
                onChange={(e) => {
                  setViews(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>rating</label>
              <input
                type="text"
                className="form-control"
                placeholder="rating"
                name="rating"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="image URL"
                name="imageURL"
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>new entry </label>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={insertRecipeQuery}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="container table-responsive home__container my-5">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>recipeID</th>
              <th>userID</th>
              <th>recipeName</th>
              <th>recipeDescription</th>
              <th>instructions</th>
              <th>cookingTime</th>
              <th>views</th>
              <th>rating</th>
              <th>image URL</th>
            </tr>
          </thead>
          <tbody>
            {queryResponse.map((recipe) => {
              return (
                <tr>
                  <td>{recipe.recipeID}</td>
                  <td>{recipe.userID}</td>
                  <td>{recipe.recipeName}</td>
                  <td>{recipe.recipeDescription}</td>
                  <td>{recipe.recipeInstructions}</td>
                  <td>{recipe.cookingTime}</td>
                  <td>{recipe.views}</td>
                  <td>{recipe.rating}</td>
                  <td>{recipe.recipeImageURL}</td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    name={`Update${recipe.recipeID}`}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    name={`Delete${recipe.recipeID}`}
                    onClick={deleteQuery(recipe.recipeID)}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipesTable;
