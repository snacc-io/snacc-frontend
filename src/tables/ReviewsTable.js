import React, { useState, useEffect } from 'react'
import Axios from "axios"

function ReviewsTable() {


  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryRespose] = useState([]);

  useEffect(() => {
    Axios.get("https://8b3ea4cc0292.ngrok.io/api/Reviews").then((response) => {
      setQueryRespose(response.data);
    });
  });


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
              <label>recipeID</label>
              <input
                type="text"
                className="form-control"
                placeholder="recipeID"
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
              <label>comment</label>
              <input
                type="text"
                className="form-control"
                placeholder="comment"
              />
            </div>

            <div className="col">
              <label>image</label>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Upload</button>
            </div>
           
            <div className="col">
                <label> </label>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Add</button>
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
                <th>image</th>
              </tr>
            </thead>
            <tbody>
  `            {queryResponse.map((review) => {
                  return (
                    <tr>
                      <td>{review.reviewID}</td>
                      <td>{review.userID}</td>
                      <td>{review.recipeID}</td>
                      <td>{review.rating}</td>
                      <td>{review.comment}</td>
                      <td>{review.image}</td>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                    </tr>

                  );
                })}`
              
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default ReviewsTable
