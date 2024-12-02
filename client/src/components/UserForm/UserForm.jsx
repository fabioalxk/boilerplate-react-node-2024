import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/session";
import "./UserForm.scss";

function UserForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2 className="user-form__title">Add a New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="user-form__input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="user-form__input"
      />
      <button type="submit" className="user-form__button">
        Add User
      </button>
    </form>
  );
}

export default UserForm;
