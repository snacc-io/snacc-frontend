import React from 'react'

function UsersTable() {
    return (
        <div className="home__container">
        <div className="container my-5">
        <form>
          <div className="form-row">
            <div className="col">
              <label>userID</label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
              />
            </div>
            <div className="col">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
              />
            </div>
           
            <div className="col">
              <label>email</label>
              <input
                type="text"
                className="form-control"
                placeholder="email"
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
                <th>userID</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>51324</td>
                <td>potatoBaker78</td>
                <td>john@example.com</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>

              <tr>
                <td>653513</td>
                <td>bestCookEver</td>
                <td>sally@example.com</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>

              <tr>
                <td>8674546</td>
                <td>masterChef</td>
                <td>GordanRamsey@example.com</td>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default UsersTable
