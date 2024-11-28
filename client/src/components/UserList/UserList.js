// src/components/UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, removeUser } from "../../redux/actions/session";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.session?.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user?.id}>
            {user?.name} - {user?.email}
            <button onClick={() => handleDelete(user?.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
