import React from 'react'

function ReviewsTable() {
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
              <tr>
                <td>51324</td>
                <td>1234</td>
                <td>2655246</td>
                <td>4</td>
                <td>It was delicious</td>
                <td>not displayed</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
              <tr>
                <td>67587</td>
                <td>3567</td>
                <td>2</td>
                <td>3.99</td>
                <td>I hated it</td>
                <td>not displayed</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
              <tr>
                <td>43</td>
                <td>365421</td>
                <td>26</td>
                <td>1</td>
                <td>My grandma's favorite</td>
                <td>not displayed</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default ReviewsTable
