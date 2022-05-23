import React, { useContext, useEffect, useState } from 'react';
import '../styles/block-styles/_main.scss';
import Person from './Person';
import Repos from './Repos';
import { NameContext } from './context';
import FetchService from './services/fetchService';
import NotFoundUser from './notFoundUser';
import StartBlock from './StartBlock';
import NotFoundRepos from './notFoundRepos';
import LoadingPage from './LoadingPage';

function Main() {
  const login = useContext(NameContext);

  const [personData, setPersonData] = useState(null);
  const [reposData, setReposData] = useState(null);
  const [isLoadingPerson, setIsLoadingPerson] = useState(false);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);

  useEffect(() => {
    fetchPersonData(login);
    fetchReposData(login);
  }, []);

  useEffect(() => {
    fetchPersonData(login);
    fetchReposData(login);
  }, [login]);

  async function fetchPersonData(login: string) {
    try {
      setIsLoadingPerson(true);
      const response = await FetchService.fetchPerson(login);
      if (response) {
        if (response.status === 200) {
          setPersonData(response.data);
        }
      }
    } catch {
      setPersonData(null);
    } finally {
      setIsLoadingPerson(false);
    }
  }

  async function fetchReposData(login: string) {
    try {
      setIsLoadingRepos(true);
      const response = await FetchService.fetchRepos(login);
      if (response) {
        if (response.status === 200) {
          setReposData(response.data);
        }
      }
    } catch {
      setReposData(null);
    } finally {
      setIsLoadingRepos(false);
    }
  }

  if (!login) {
    return (
      <div className="Main">
        <StartBlock></StartBlock>
      </div>
    );
  }

  if (isLoadingPerson || isLoadingRepos) {
    return (
      <div className="Main">
        <LoadingPage></LoadingPage>
      </div>
    );
  }

  if (personData && reposData) {
    return (
      <div className="Main minimize-height">
        <div className="main_content-block">
          <Person personData={personData}></Person>
          <Repos login={login} reposData={reposData}></Repos>
        </div>
      </div>
    );
  } else if (personData && !reposData) {
    <div className="Main minimize-height">
      <div className="main_content-block">
        <Person personData={personData}></Person>
        <NotFoundRepos></NotFoundRepos>
      </div>
    </div>;
  }
  return (
    <div className="Main">
      <NotFoundUser></NotFoundUser>
    </div>
  );
}

export default Main;
