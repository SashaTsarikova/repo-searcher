import React, { useState } from 'react';
import { Github, Search } from 'react-bootstrap-icons';
import '../styles/block-styles/_header.scss';

function Header(props: any) {
  const [searchString, setSearchString] = useState('');

  const findUser = (e: any) => {
    e.preventDefault();
    props.setLogin(searchString);
  };

  return (
    <div className="Header">
      <Github className="git-logo"></Github>
      <form className="header_input-block" onSubmit={findUser}>
        <Search className="header_input-logo"></Search>
        <input
          type="text"
          className="header_input"
          placeholder="Enter GitHub username"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Header;
