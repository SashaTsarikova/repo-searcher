import React from 'react';
import '../styles/block-styles/_repos.scss';
import { IRepository } from './interfaces/IRepositories';
import RepoItem from './ReposItem';

function RepoList(props: any) {
  const reposDataArr: IRepository[] = props.reposDataArr;

  return (
    <div className="RepoList">
      {reposDataArr.map((reposDataItem: IRepository) => {
        return <RepoItem reposDataItem={reposDataItem} key={reposDataItem.id}></RepoItem>;
      })}
    </div>
  );
}

export default RepoList;
