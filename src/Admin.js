import React from "react";

function Admin() {
  return (
    <div className="home__container">
      <div className="container my-5">
      <form>
        <div className="form-row">
          <div className="col">
            <label>Test</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <label>Test</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
         
          <div className="col">
            <label>Test</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
         
          <div className="col">
            <label>Test</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
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
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
