import React from 'react';
import '../styles/block-styles/_repos.scss';
import { IRepository } from './interfaces/IRepositories';

function RepoItem(props: any) {
  const reposDataItem: IRepository = props.reposDataItem;
  return (
    <div className="RepoItem">
      <a href={reposDataItem.html_url} className="RepoItem_title" target="_blank" rel="noreferrer">
        {reposDataItem.name}
      </a>
      <p className="RepoItem_description">
        {reposDataItem.description ? reposDataItem.description : 'no description found'}
      </p>
    </div>
  );
}

export default RepoItem;
