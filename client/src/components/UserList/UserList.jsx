import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, removeUser } from "../../redux/actions/session";
import "./UserList.scss";

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
    <div className="user-list">
      <h2 className="user-list__title">User List</h2>
      <ul className="user-list__items">
        {users?.map((user) => (
          <li key={user?.id} className="user-list__item">
            <span>
              {user?.name} - {user?.email}
            </span>
            <button
              onClick={() => handleDelete(user?.id)}
              className="user-list__delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
