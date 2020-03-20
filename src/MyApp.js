import React from "react";
import "./MyApp.css";
import UserProfile from "./components/user/UserProfile";

function MyApp() {
  const user = {
    fullName: "Ricardito Tamal",
    city: "estulapio",
    profileImage: "https://i.imgur.com/gQL6Dg4.jpg"
  };
  return (
    <div className='App'>
      <UserProfile user={user} />
      <a
        className='App-link'
        href='https://github.com/ChineseStuff/react-utn-mod1'
        target='_blank'
        rel='noopener noreferrer'
      >
        Take a look to my GHub repo
      </a>
    </div>
  );
}

export default MyApp;
