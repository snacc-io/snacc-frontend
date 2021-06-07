import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { api } from "../apiPath.js"



function IngredientsTable() {


  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);

  const [ingredientID, setIngredientID] = useState(0);
  const [ingredientName, setIngredientName] = useState("");

  useEffect(() => {
      Axios.get(`${api.url}/api/Ingredients`).then((response) => {
      setQueryResponse(response.data);
    });
  }, []);


  const insertIngredientQuery = () => {
    Axios.post(`${api.url}/api/Ingredients/Insert`, {
      ingredientID: ingredientID,
      ingredientName: ingredientName,
    }).then((response) => {
      if (response.data) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse,
          {
            ingredientID: ingredientID,
            ingredientName: ingredientName,
          },
        ]);
      } else alert("Failed query");
    });
  };

  const updateQuery = (ID) => {};

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Ingredients/Delete`, {
        ingredientID: ID,
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

    <form>
    <div className="container table-responsive home__container my-5">
    <table className="table ">
        <thead>
        <tr>
            <th>ingredientID</th>
            <th>ingredientName</th>
            <th>new entry</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><input
                type="text"
                className="form-control"
                placeholder="ingredientID"
                name="ingredientID"
                onChange={(e) => {
                  setIngredientID(e.target.value);
                }}
              /></td>
            <td><input
                type="text"
                className="form-control"
                placeholder="ingredientName"
                name="ingredientName"
                onChange={(e) => {
                  setIngredientName(e.target.value);
                }}
              /></td>
            <td><button 
                  type="button" 
                  className="btn btn-primary" 
                  data-dismiss="modal"
                  onClick={insertIngredientQuery}
                  >
                    Add
                  </button></td>
        </tr>
        </tbody>
    </table>
    </div>
    </form>

        <div class="container table-responsive home__container my-5">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ingredientID</th>
                <th>ingredientName</th>
              </tr>
            </thead>
            <tbody>
            {queryResponse.map((ingredient) => {
                return (
                  <tr>
                    <td>{ingredient.ingredientID}</td>
                    <td>{ingredient.ingredientName}</td>
                    <td>
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
                      onClick={deleteQuery(ingredient.ingredientID)}
                      >
                        Delete
                     </button>
                     </td>
                     
                  </tr>

                );
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default IngredientsTable
