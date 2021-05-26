import React from 'react'

function RecipesTable() {
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
              <label>ingredientsList</label>
              <input
                type="text"
                className="form-control"
                placeholder="ingredientsList"
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
                <th>ingredientsList</th>
                <th>instructions</th>
                <th>cookingTime</th>
                <th>views</th>
                <th>rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12654</td>
                <td>257656</td>
                <td>Baked potato</td>
                <td>A potato baked in the oven</td>
                <td>potato</td>
                <td>Bake a potato in the oven</td>
                <td>20</td>
                <td>2</td>
                <td>5</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default RecipesTable
