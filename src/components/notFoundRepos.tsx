import React from 'react';
import '../styles/block-styles/_empty.scss';

function NotFoundRepos() {
  return (
    <div className="EmptyPage">
      <div className="EmptyPage_flex-container">
        <img src="./folder.svg" className="folder-icon" alt="logo-user" />
        <p className="EmptyPage_title empty-repos-title">Repository list is empty</p>
      </div>
    </div>
  );
}

export default NotFoundRepos;
