import React, { useState, useEffect } from 'react'
import Axios from "axios"

function RecipesIngredientsTable() {




  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryRespose] = useState([]);

  useEffect(() => {
    Axios.get("https://8b3ea4cc0292.ngrok.io/api/RecipesIngredients").then((response) => {
      setQueryRespose(response.data);
    });
  });




    return (
        <div>
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
            <label>ingredientID</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingredientID"
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
              <th>ingredientID</th>
            </tr>
          </thead>
          <tbody>
              {queryResponse.map((recipe_ingredient) => {
                    return (
                      <tr>
                        <td>{recipe_ingredient.recipeID}</td>
                        <td>{recipe_ingredient.ingredientID}</td>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                      </tr>

                    );
                  })}
          </tbody>
        </table>
      </div>
    </div> 
        </div>
    )
}

export default RecipesIngredientsTable
