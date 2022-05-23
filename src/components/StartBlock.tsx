import React from 'react';
import { Search } from 'react-bootstrap-icons';
import '../styles/block-styles/_empty.scss';

function StartBlock() {
  return (
    <div className="EmptyPage">
      <div className="EmptyPage_flex-container">
        <Search className="EmptyPage_logo"></Search>
        <p className="EmptyPage_title">Start with searching a GitHub user</p>
      </div>
    </div>
  );
}

export default StartBlock;
