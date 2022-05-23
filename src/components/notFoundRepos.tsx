import React from 'react';
import { FolderX } from 'react-bootstrap-icons';
import '../styles/block-styles/_empty.scss';

function NotFoundRepos() {
  return (
    <div className="EmptyPage minimize-height">
      <div className="EmptyPage_flex-container">
        <FolderX className="EmptyPage_logo"></FolderX>
        <p className="EmptyPage_title empty-repos-title">Repository list is empty</p>
      </div>
    </div>
  );
}

export default NotFoundRepos;
