import React, { useEffect, useState } from "react";
import { Iuser } from "../Interfaces/interface";
import '../Component/css/userListComponentCss.css';  


const UserListComponent : React.FC<{ users: Iuser[] | null }> = ({ users }) =>{
    
    if (users === null) {
      return <p>Loading...</p>;  // Show loading message if users is null
    }
  
    return (
      <div>
        <h1>User List</h1>
        {users.length === 0 ? (
          <p>No users found.</p>  // Display a message if the array is empty
        ) : (
          <div className="user-table">
            <div className="table-header">
              <span>Avatar</span>
              <span>Name</span>
              <span>Email</span>
            </div>
            {users.map((user) => (
              <div key={user.id} className="table-row">
                <div className="table-cell">
                  <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="user-avatar" />
                </div>
                <div className="table-cell">{`${user.first_name} ${user.last_name}`}</div>
                <div className="table-cell">{user.email}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default UserListComponent;