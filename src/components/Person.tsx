import React from 'react';
import { PeopleFill, PersonFill } from 'react-bootstrap-icons';
import '../styles/block-styles/_person.scss';

function Person(props: any) {
  const personData = props.personData;

  return (
    <div className="Person">
      <div className="person-container">
        <div className="person_img-block">
          <img className="persons-img" src={personData.avatar_url} alt="" />
        </div>
        <h2 className="person_big-title">{personData.name ? personData.name : personData.login}</h2>
        <a
          href={personData.html_url}
          className="person_link-title"
          target="_blank"
          rel="noreferrer"
        >
          {personData.login}
        </a>
        <div className="person_follow-container">
          <div className="follow-item">
            <PeopleFill className="follow-logo"></PeopleFill>
            <p className="person_small-title">{personData.followers}</p>
            <p className="person_small-title">followers</p>
          </div>
          <div className="follow-item">
            <PersonFill className="follow-logo"></PersonFill>
            <p className="person_small-title">{personData.followers}</p>
            <p className="person_small-title">following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
