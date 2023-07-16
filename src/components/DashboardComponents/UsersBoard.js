import React, { Fragment, useContext } from "react";
import { allData } from "../../context/Context";
import axios from "axios";
import Swal from "sweetalert2";

function UsersBoard() {
  const { users } = useContext(allData);
  const deleteUser = (user) => {
    Swal.fire({
      title: `Are You Sure To Delete ${user.username} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios.delete(`http://localhost:5001/users/${user.id}`);
      }
    });
  };
  return (
    <Fragment>
      <h1>Users Page</h1>
      <div className="dash-rightside">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="del-btn"
                      onClick={() => deleteUser(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default UsersBoard;
