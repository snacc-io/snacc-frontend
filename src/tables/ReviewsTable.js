import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { api } from "../apiPath.js"

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
      reviewID: reviewID,
      recipeID: recipeID,
      userID: userID,
      rating: rating,
      comment: comment,
      imageURL: imageURL,
    }).then((response) => {
      if (response.data) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse,
          {
            reviewID: reviewID,
            recipeID: recipeID,
            userID: userID,
            rating: rating,
            comment: comment,
            imageURL: imageURL,
          },
        ]);
      } else alert("Failed query");
    });
  };

  const updateQuery = (ID) => {};

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Reviews/Delete`, {
        reviewID: ID,
      }).then((response) => {
        if (response) {
          alert("successful query");
          setQueryResponse(
            queryResponse.filter((val) => {
              return val.reviewID !== ID;
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
              <label>reviewID</label>
              <input
                type="text"
                className="form-control"
                placeholder="reviewID"
                name="reviewID"
                onChange={(e) => {
                  setReviewID(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>userID</label>
                <select
                    type="text"
                    className="form-control"
                    name="userID"
                    onChange={(e) => {
                    setUserID(e.target.value);
                    }}
                >
                        {userList.map((user) => {
                      return (
                        
                        <option value={user.userID}>
                          {user.userID} : {user.username}

                        </option>
                      );
                    })}
                </select>
            </div>
           
            <div className="col">
              <label>recipeID</label>
                <select
                    type="text"
                    className="form-control"
                    name="recipeID"
                    onChange={(e) => {
                    setRecipeID(e.target.value);
                    }}
                >
                        {recipeList.map((recipe) => {
                      return (
                        
                        <option value={recipe.recipeID}>
                          {recipe.recipeID} : {recipe.recipeName}

                        </option>
                      );
                    })}
                </select>
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
              <label>comment</label>
              <input
                type="text"
                className="form-control"
                placeholder="comment"
                name="comment"
                name="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>

            <div className="col">
              <label>imageURL</label>
              <input
                type="text"
                className="form-control"
                placeholder="some url to an image"
                name="imageURL"
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
            </div>
           
            <div className="col">
                <label> </label>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-dismiss="modal"
                  onClick={insertReviewQuery}
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
    )
}

export default ReviewsTable
