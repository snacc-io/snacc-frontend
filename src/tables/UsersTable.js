import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { api } from "../config.js"

function UsersTable() {


  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryRespose] = useState([]);

  useEffect(() => {
      Axios.get(`${api.url}/api/Users`).then((response) => {
      // Axios.get(`http://localhost:3001/api/Users`).then((response) => {
      setQueryRespose(response.data);
    });
  }, []);



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

            {queryResponse.map((user) => {
                return (
                  <tr>
                    <td>{user.userID}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                  </tr>

                );
              })}

            </tbody>
          </table>
        </div>
      </div>
    )
}

export default UsersTable
