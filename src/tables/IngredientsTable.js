import React from 'react'

function IngredientsTable() {
    return (
        <div className="home__container">
        <div className="container my-5">
        <form>
          <div className="form-row">
            <div className="col">
              <label>ingredientID</label>
              <input
                type="text"
                className="form-control"
                placeholder="ingredientID"
              />
            </div>
            <div className="col">
              <label>ingredientName</label>
              <input
                type="text"
                className="form-control"
                placeholder="ingredientName"
              />
            </div>
           
            <div className="col">
                <label>new entry</label>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Add</button>
            </div>
           
           
            
          </div>
        </form>
        </div>
  
        <div class="container table-responsive home__container my-5">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ingredientID</th>
                <th>ingredientName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>514253</td>
                <td>potato</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default IngredientsTable
