import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { api } from "../apiPath.js";
import "./popup.css";

function ReviewsTable() {
  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);
  const [userList, setUserList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  const [reviewID, setReviewID] = useState(0);
  const [userID, setUserID] = useState(0);
  const [recipeID, setRecipeID] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [popupReviewID, setPopupReviewID] = useState(0);
  const [popupUserID, setPopupUserID] = useState(0);
  const [popupRecipeID, setPopupRecipeID] = useState(0);
  const [popupRating, setPopupRating] = useState(0);
  const [popupComment, setPopupComment] = useState("");
  const [popupImageURL, setPopupImageURL] = useState("");

  const popupBackdrop = useRef(null);
  const popup = useRef(null)

  useEffect(() => {
    Axios.get(`${api.url}/api/Reviews`).then((response) => {
      setQueryResponse(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(`${api.url}/api/Users`).then((response) => {
      setUserList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(`${api.url}/api/Recipes`).then((response) => {
      setRecipeList(response.data);
    });
  }, []);


  
  const insertReviewQuery = () => {
    Axios.post(`${api.url}/api/Reviews/Insert`, {
      recipeID: recipeID,
      userID: userID,
      rating: rating,
      comment: comment,
      imageURL: imageURL,
    }).then((response) => {
      if (response.data) {
        Axios.get(`${api.url}/api/Reviews`).then((response) => {
          setQueryResponse(response.data);
        });
        alert("successful query");
      } else alert("Failed query");
    });
  };

  const updateButton = (data) => {
    return () => {
      setPopupReviewID(data.reviewID)
      setPopupUserID(data.userID);
      setPopupRecipeID(data.recipeID);
      setPopupRating(data.rating);
      setPopupComment(data.comment)
      setPopupImageURL(data.imageURL);
      popup.current.classList.toggle("hidden");
      popupBackdrop.current.classList.toggle("hidden");
    };
  };

  const updateQuery = (data) => {
    console.log("INSIDE UPDATEQUERY");
    Axios.post(`${api.url}/api/Reviews/Update`, data).then((response) => {
      if (response.data.affectedRows) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse.filter((val) => {
            return val.reviewID !== data.reviewID;
          }),
          data,
        ]);
        document.getElementsByName("reviewID")[0].value = data.reviewID;
        popup.current.classList.toggle("hidden");
        popupBackdrop.current.classList.toggle("hidden");
      } else alert("Failed query");
    });
  };

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Reviews/Delete`, {
        reviewID: ID,
      }).then((response) => {
        if (response) {
          Axios.get(`${api.url}/api/Reviews`).then((response) => {
            setQueryResponse(response.data);
          });
          alert("successful query");
        } else alert("Failed query");
      });
    };
  };

  return (
  <div className="home__container">

    <div ref={popupBackdrop} className="hidden backdrop"></div>
    <div ref={popup} className="hidden popup">
      <label>reviewID:</label>
      <input
        type="text"
        className="form-control"
        placeholder={popupReviewID}
        disabled
        name="reviewID"
        onChange={(e) => {
          setReviewID(e.target.value);
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
      <label>recipeID:</label>
      <select
        type="text"
        className="form-control"
        name="recipeID"
        placeholder="Select a recipe"
        value={popupRecipeID}
        onChange={(e) => {
          setPopupRecipeID(e.target.value);
        }}
      >
        {recipeList.map((recipe) => {
          console.log("Returning userlist map");
          return (
            <option value={recipe.recipeID}>
              {recipe.recipeID} : {recipe.recipeName}
            </option>
          );
        })}
      </select>
      <label>rating</label>
      <input
        type="number"
        className="form-control"
        placeholder="rating"
        name="rating"
        value={popupRating}
        onChange={(e) => {
          setPopupRating(e.target.value);
        }}
      />
      <label>comment</label>
      <input
        type="text"
        className="form-control"
        placeholder="comment"
        name="comment"
        value={popupComment}
        onChange={(e) => {
          setPopupComment(e.target.value);
        }}
      />
      <label>imageURL</label>
      <input
        type="text"
        className="form-control"
        placeholder="imageURL"
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
              reviewID: popupReviewID,
              recipeID: popupRecipeID,
              userID: popupUserID,
              rating: popupRating,
              comment: popupComment,
              imageURL: popupImageURL,
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
              <th>reviewID</th>
              <th>userID</th>
              <th>recipeID</th>
              <th>rating</th>
              <th>comment</th>
              <th>imageURL</th>
              <th>new entry</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td><input
                type="text"
                className="form-control"
                placeholder="autogenerated"
                disabled
                name="reviewID"
                onChange={(e) => {
                  setReviewID(e.target.value);
                }}
              /></td>
              <td><select
                    type="text"
                    className="form-control"
                    placeholder="Select a user"
                    name="userID"
                    onChange={(e) => {
                    setUserID(e.target.value);
                    }}
                >
                      <option value="" disabled selected hidden>select</option>
                        {userList.map((user) => {
                      return (
                        
                        <option value={user.userID}>
                          {user.userID} : {user.username}

                        </option>
                      );
                    })}
                </select></td>
              <td><select
                    type="text"
                    className="form-control"
                    name="recipeID"
                    placeholder="Select a recipe"
                    onChange={(e) => {
                    setRecipeID(e.target.value);
                    }}
                >
                      <option value="" disabled selected hidden>select</option>
                        {recipeList.map((recipe) => {
                      return (
                        
                        <option value={recipe.recipeID}>
                          {recipe.recipeID} : {recipe.recipeName}

                        </option>
                      );
                    })}
                </select></td>
              <td><input
                type="text"
                className="form-control"
                placeholder="rating"
                name="rating"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              /></td>
              <td> <input
                type="text"
                className="form-control"
                placeholder="comment"
                name="comment"
                name="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              /></td>
              <td><input
                type="text"
                className="form-control"
                placeholder="url for image"
                name="imageURL"
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              /></td>
              <td> <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={insertReviewQuery}
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
              <th>reviewID</th>
              <th>userID</th>
              <th>recipeID</th>
              <th>rating</th>
              <th>comment</th>
              <th>imageURL</th>
            </tr>
          </thead>
          <tbody>
            {queryResponse.map((review) => {
              return (
                <tr>
                  <td>{review.reviewID}</td>
                  <td>{review.userID}</td>
                  <td>{review.recipeID}</td>
                  <td>{review.rating}</td>
                  <td>{review.comment}</td>
                  <td>{review.imageURL}</td>
                  <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      name={`Update${review.reviewID}`}
                      onClick={updateButton(review)}
                    >
                      Update
                    </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={deleteQuery(review.reviewID)}
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

export default ReviewsTable;
