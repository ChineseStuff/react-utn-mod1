import React from "react";
import "./MyApp.css";
import UserProfile from "./components/user/UserProfile";
import SignUpUser from "./components/user/SignUpUser";

function MyApp() {
  return (
    <div className='App'>
      {/* <UserProfile /> */}
      <SignUpUser />
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
