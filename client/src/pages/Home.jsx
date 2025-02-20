// src/pages/Home.js
import React from "react";
import "./Home.scss";
import UserForm from "../components/UserForm/UserForm";
import UserList from "../components/UserList/UserList";

function Home() {
  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
}

export default Home;
