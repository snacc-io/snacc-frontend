import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { api } from "../apiPath.js";
import "./popup.css";
import Header from "../components/Header.js";
import "../components/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function RecipesTable() {
  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);
  const [userList, setUserList] = useState([]);

  const [searchString, setSearchString] = useState("");

  const [recipeID, setRecipeID] = useState(0);
  const [userID, setUserID] = useState(0);
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookingTime, setCookingTime] = useState(0.0);
  const [views, setViews] = useState(0);
  const [rating, setRating] = useState(0);
  const [imageURL, setImageURL] = useState("");

  const [popupRecipeID, setPopupRecipeID] = useState(0);
  const [popupUserID, setPopupUserID] = useState(0);
  const [popupRecipeName, setPopupRecipeName] = useState("");
  const [popupRecipeDescription, setPopupRecipeDescription] = useState("");
  const [popupInstructions, setPopupInstructions] = useState("");
  const [popupCookingTime, setPopupCookingTime] = useState(0.0);
  const [popupViews, setPopupViews] = useState(0);
  const [popupRating, setPopupRating] = useState(0);
  const [popupImageURL, setPopupImageURL] = useState("");

  const popupBackdrop = useRef(null);
  const popup = useRef(null);

  useEffect(() => {
    Axios.get(`${api.url}/api/Recipes`).then((response) => {
      setQueryResponse(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(`${api.url}/api/Users`).then((response) => {
      setUserList(response.data);
    });
  }, []);

  const insertRecipeQuery = () => {
    Axios.post(`${api.url}/api/Recipes/Insert`, {
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
        Axios.get(`${api.url}/api/Recipes`).then((response) => {
          setQueryResponse(response.data);
        });
        alert("successful query");
      } else alert("Failed query");
    });
  };

  const updateButton = (data) => {
    return () => {
      setPopupRecipeID(data.recipeID);
      setPopupUserID(data.userID);
      setPopupRecipeName(data.recipeName);
      setPopupRecipeDescription(data.recipeDescription);
      setPopupInstructions(data.recipeInstructions);
      setPopupCookingTime(data.cookingTime);
      setPopupViews(data.views);
      setPopupRating(data.rating);
      setPopupImageURL(data.recipeImageURL);
      popup.current.classList.toggle("hidden");
      popupBackdrop.current.classList.toggle("hidden");
    };
  };

  const updateQuery = (data) => {
    Axios.post(`${api.url}/api/Recipes/Update`, data).then((response) => {
      if (response.data.affectedRows) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse.filter((val) => {
            return val.recipeID !== data.recipeID;
          }),
          data,
        ]);
        popup.current.classList.toggle("hidden");
        popupBackdrop.current.classList.toggle("hidden");
      } else alert("Failed query");
    });
  };

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Recipes/Delete`, {
        recipeID: ID,
      }).then((response) => {
        if (response) {
          Axios.get(`${api.url}/api/Recipes`).then((response) => {
            setQueryResponse(response.data);
          });
          alert("successful query");
        } else alert("Failed query");
      });
    };
  };


  const searchQueryResults = (searchString) => {
    return () => {   
      Axios.get(`${api.url}/api/Search/Recipes/${searchString}`).then((response) => {
          setQueryResponse(response.data);
      }); 
    };
  };

  return (
    <div className="home__container">
      <div ref={popupBackdrop} className="hidden backdrop"></div>
      <div ref={popup} className="hidden popup">
        <label>recipeID:</label>
        <input
          type="text"
          className="form-control"
          placeholder={popupRecipeID}
          disabled
          name="recipeID"
          onChange={(e) => {
            setRecipeID(e.target.value);
          }}
        />
        <label>userID:</label>
        <select
          type="text"
          className="form-control"
          name="userID"
          placeholder="Select a user"
          value={popupUserID}
          onChange={(e) => {
            setPopupUserID(e.target.value);
          }}
        >
          {userList.map((user) => {
            console.log("Returning userlist map");
            return (
              <option value={user.userID}>
                {user.userID} : {user.username}
              </option>
            );
          })}
        </select>
        <label>recipeName:</label>
        <input
          type="text"
          className="form-control"
          placeholder="recipeName"
          name="recipeName"
          value={popupRecipeName}
          onChange={(e) => {
            setPopupRecipeName(e.target.value);
          }}
        />
        <label>recipeDescription:</label>
        <input
          type="text"
          className="form-control"
          placeholder="recipeDescription"
          name="recipeDescription"
          value={popupRecipeDescription}
          onChange={(e) => {
            setPopupRecipeDescription(e.target.value);
          }}
        />
        <label>instructions:</label>
        <input
          type="text"
          className="form-control"
          placeholder="instructions"
          name="instructions"
          value={popupInstructions}
          onChange={(e) => {
            setPopupInstructions(e.target.value);
          }}
        />
        <label>cookingTime:</label>
        <input
          type="text"
          className="form-control"
          placeholder="cookingTime"
          name="cookingTime"
          value={popupCookingTime}
          onChange={(e) => {
            setPopupCookingTime(e.target.value);
          }}
        />
        <label>views:</label>
        <input
          type="text"
          className="form-control"
          placeholder="views"
          name="views"
          value={popupViews}
          onChange={(e) => {
            setPopupViews(e.target.value);
          }}
        />
        <label>rating:</label>
        <input
          type="text"
          className="form-control"
          placeholder="rating"
          name="rating"
          value={popupRating}
          onChange={(e) => {
            setPopupRating(e.target.value);
          }}
        />
        <label>imageURL:</label>
        <input
          type="text"
          className="form-control"
          placeholder="image URL"
          name="imageURL"
          value={popupImageURL}
          onChange={(e) => {
            setPopupImageURL(e.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              updateQuery({
                recipeID: popupRecipeID,
                userID: popupUserID,
                recipeName: popupRecipeName,
                recipeDescription: popupRecipeDescription,
                recipeInstructions: popupInstructions,
                cookingTime: popupCookingTime,
                views: popupViews,
                rating: popupRating,
                recipeImageURL: popupImageURL,
              });
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              popup.current.classList.toggle("hidden");
              popupBackdrop.current.classList.toggle("hidden");
            }}
          >
            cancel
          </button>
        </div>
      </div>

      <form>
        <div className="container table-responsive home__container my-5">
          <table className="table ">
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
                <th>new entry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="autogenerated"
                    disabled
                    name="recipeID"
                    onChange={(e) => {
                      setRecipeID(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <select
                    type="text"
                    className="form-control"
                    name="userID"
                    placeholder="Select a user"
                    onChange={(e) => {
                      setUserID(e.target.value);
                    }}
                  >
                    {userList.map((user) => {
                      console.log("Returning userlist map");
                      return (
                        <option value={user.userID}>
                          {user.userID} : {user.username}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="recipeName"
                    name="recipeName"
                    onChange={(e) => {
                      setRecipeName(e.target.value);
                    }}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="recipeDescription"
                    name="recipeDescription"
                    onChange={(e) => {
                      setRecipeDescription(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="instructions"
                    name="instructions"
                    onChange={(e) => {
                      setInstructions(e.target.value);
                    }}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cookingTime"
                    name="cookingTime"
                    onChange={(e) => {
                      setCookingTime(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="views"
                    name="views"
                    onChange={(e) => {
                      setViews(e.target.value);
                    }}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="rating"
                    name="rating"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="image URL"
                    name="imageURL"
                    onChange={(e) => {
                      setImageURL(e.target.value);
                    }}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={insertRecipeQuery}
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>

      <div className="header__search">
      <div className="container home__container my-5">
        <input 
        className="header__searchInput" 
        placeholder="Search for a recipe" 
        type="text" 
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
          if (e.key ==='Enter') {
            searchQueryResults(searchString)
          }
        }}

        />

        <button
          type="button"
          className="btn btn-primary"
          data-dismiss="modal"
          onClick={searchQueryResults(searchString)}
        >
          Search
        </button>
      </div>
      </div>

      <div class=" table-responsive  my-5">
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
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      name={`Update${recipe.recipeID}`}
                      onClick={updateButton(recipe)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      name={`Delete${recipe.recipeID}`}
                      onClick={deleteQuery(recipe.recipeID)}
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
  );
}

export default RecipesTable;
