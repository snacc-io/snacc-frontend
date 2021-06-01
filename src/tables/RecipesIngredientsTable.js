import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { api } from "../apiPath.js"

function RecipesIngredientsTable() {
  
  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);

  const [recipeID, setRecipeID] = useState(0);
  const [ingredientID, setIngredientID] = useState();

  useEffect(() => {
      Axios.get(`${api.url}/api/RecipesIngredients`).then((response) => {
      setQueryResponse(response.data);
      console.log("Query succesfuly")
    });
  }, []);

  const insertRecipesIngredientsQuery = () => {
    Axios.post(`${api.url}/api/RecipesIngredients/Insert`, {
        recipeID: recipeID,
        ingredientID: ingredientID,
      }).then((response) => {
        if (response.data) {
          alert("successful query");
          setQueryResponse([
            ...queryResponse,
            {
              recipeID: recipeID,
              ingredientID: ingredientID,
            },
          ]);
        } else alert("Failed query");
      });
  }

  const updateQuery = (ID) => {};

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/RecipesIngredients/Delete`, {
        id: ID,
      }).then((response) => {
        if (response) {
          alert("successful query");
          setQueryResponse(
            queryResponse.filter((val) => {
              return val.recipeIngredientID !== ID;  /// Need to figure out how to reference composite key
            })
          );
        } else alert("Failed query");
      });
    };
  };


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
              name="recipeID"
              onChange={(e) => {
                setRecipeID(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label>ingredientID</label>
            <input
              type="text"
              className="form-control"
              placeholder="ingredientID"
              name="ingredientID"
              onChange={(e) => {
                setIngredientID(e.target.value);
              }}
            />
          </div>
         
          
          <div className="col">
              <label>new entry </label>
              <button type="button" 
              className="btn btn-primary" 
              data-dismiss="modal"
              onClick={insertRecipesIngredientsQuery}
              >
                Add
              </button>
          </div>
         
         
          
        </div>
      </form>
      </div>

      <div className="container table-responsive home__container my-5">
        <table className="table table-bordered">
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
                        <button 
                          type="button" 
                          className="btn btn-secondary" 
                          data-dismiss="modal"
                        >
                          Update
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-danger" 
                          data-dismiss="modal"
                          onClick={deleteQuery(recipe_ingredient.id)} //TODO figure out how to reference the composite key
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
        </div>
    )
}

export default RecipesIngredientsTable
