import React from 'react'

function RecipesIngredientsTable() {
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
            <tr>
              <td>4512</td>
              <td>12543</td>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
            </tr>
            <tr>
              <td>76512</td>
              <td>5244</td>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
            </tr>
            <tr>
              <td>6798</td>
              <td>5678</td>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
            </tr>
            <tr>
              <td>12354</td>
              <td>51243</td>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
        </div>
    )
}

export default RecipesIngredientsTable
