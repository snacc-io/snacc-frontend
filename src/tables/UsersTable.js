import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { api } from "../apiPath.js"

function UsersTable() {


  const [SQLQuery, setSQLQeury] = useState("");
  const [queryResponse, setQueryResponse] = useState([]);

  const [userID, setUserID] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");



  useEffect(() => {
      Axios.get(`${api.url}/api/Users`).then((response) => {
      setQueryResponse(response.data);
    });
  }, []);


  const insertUserQuery = () => {
    Axios.post(`${api.url}/api/Users/Insert`, {
      userID: userID,
      username: username,
      email: email,
    }).then((response) => {
      if (response.data) {
        alert("successful query");
        setQueryResponse([
          ...queryResponse,
          {
            userID: userID,
            username: username,
            email: email,
          },
        ]);
      } else alert("Failed query");
    });
  };

  const updateQuery = (ID) => {};

  const deleteQuery = (ID) => {
    return () => {
      Axios.post(`${api.url}/api/Users/Delete`, {
        userID: ID,
      }).then((response) => {
        if (response) {
          alert("successful query");
          setQueryResponse(
            queryResponse.filter((val) => {
              return val.userID !== ID;
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
              <label>userID</label>
              <input
                type="text"
                className="form-control"
                placeholder="userID"
                onChange={(e) => {
                  setUserID(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
           
            <div className="col">
              <label>email</label>
              <input
                type="text"
                className="form-control"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
           
            <div className="col">
                <label>new entry </label>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  data-dismiss="modal"
                  onClick={insertUserQuery}
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
                      onClick={deleteQuery(user.userID)}
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

export default UsersTable
