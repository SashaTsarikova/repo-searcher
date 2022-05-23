import React from 'react';
import '../styles/block-styles/_empty.scss';

function NotFoundUser() {
  return (
    <div className="EmptyPage">
      <div className="EmptyPage_flex-container">
        <img src="./person.svg" className="user-icon" alt="logo-user" />
        <h2 className="EmptyPage_title empty-repos-title">User not found</h2>
      </div>
    </div>
  );
}

export default NotFoundUser;
