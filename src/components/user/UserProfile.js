import React from "react";

const UserProfile = props => {
  return (
    <div className='wrapper'>
      <div className='left-side'>
        <div className='panel-info'>
          <h3>Informacion</h3>
          <div className='inf'>
            <div className='item'>
              <h4>Nombre</h4>
              <p>{props.user.fullName}</p>
            </div>
            <div className='item'>
              <h4>Ciudad</h4>
              <p>{props.user.city}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <img alt='user' src={props.user.profileImage}></img>
        <h4>{props.user.fullName}</h4>
      </div>
    </div>
  );
};

export default UserProfile;
