import React from 'react';
import { Person } from 'react-bootstrap-icons';
import '../styles/block-styles/_empty.scss';

function NotFoundUser() {
  return (
    <div className="EmptyPage">
      <div className="EmptyPage_flex-container">
        <Person className="EmptyPage_logo"> </Person>
        <h2 className="EmptyPage_title empty-repos-title">User not found</h2>
      </div>
    </div>
  );
}

export default NotFoundUser;
