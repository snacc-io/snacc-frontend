import React, { useState, useEffect } from 'react'
import Axios from "axios"

function RecipesTable() {


    const [SQLQuery, setSQLQeury] = useState("");
    const [queryResponse, setQueryRespose] = useState([]);

    useEffect(() => {
      Axios.get("https://8b3ea4cc0292.ngrok.io/api/Recipes").then((response) => {
        setQueryRespose(response.data);
      });
    });

    // const submitQuery = () => {
    //   Axios.post("https://5dbf6dbfe166.ngrok.io/api", { SQLQuery: SQLQuery }).then(() => {
    //     alert("successful query");
    //   });
    //   // setSQLQuery([...SQLQuery, {VALUES THAT CORRESPOND TO THE FIELD}]);
    // };



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
              />
            </div>
            <div className="col">
              <label>userID</label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
              />
            </div>
           
            <div className="col">
              <label>recipeName</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeName"
              />
            </div>
           
            <div className="col">
              <label>recipeDescription</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeDescription"
              />
            </div>

            <div className="col">
              <label>instructions</label>
              <input
                type="text"
                className="form-control"
                placeholder="instructions"
              />
            </div>

            <div className="col">
              <label>cookingTime</label>
              <input
                type="text"
                className="form-control"
                placeholder="cookingTime"
              />
            </div>

            <div className="col">
              <label>views</label>
              <input
                type="text"
                className="form-control"
                placeholder="views"
              />
            </div>

            <div className="col">
              <label>rating</label>
              <input
                type="text"
                className="form-control"
                placeholder="rating"
              />
            </div>

            <div className="col">
              <label>image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="image URL"
              />
            </div>
           
            <div className="col">
                <label>new entry </label>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Add</button>
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
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                  </tr>

                );
              })}

            </tbody>
          </table>
        </div>
      </div>
    )
}

export default RecipesTable
