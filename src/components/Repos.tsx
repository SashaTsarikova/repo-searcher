/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IRepository } from './interfaces/IRepositories';
import NotFoundRepos from './notFoundRepos';
import ReactPaginate from 'react-paginate';
import RepoList from './ReposList';
import '../styles/block-styles/_pagination.scss';

function Repos(props: any) {
  const [currentPage, setCurrentPage] = useState(0);
  const [reposPerPage] = useState(4);
  const reposDataArr: IRepository[] = props.reposData;
  const allReposCount = reposDataArr.length;
  const allPagesCount = Math.ceil(allReposCount / reposPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  if (reposDataArr.length) {
    return (
      <div className="Repos minimize-height">
        <h2 className="repos_big-title">Repositories ({allReposCount})</h2>
        <RepoList
          reposDataArr={reposDataArr.filter(
            (elem, id) =>
              id >= currentPage * reposPerPage &&
              id <= currentPage * reposPerPage + reposPerPage - 1
          )}
        ></RepoList>
        <div className="repos_pagination-container">
          <div className="repos_pagination">
            <p className="repos_title">
              {currentPage * reposPerPage + 1} - {currentPage * reposPerPage + reposPerPage} of
              {' ' + allReposCount + ' '} items
            </p>
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={allPagesCount}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="active"
              nextClassName="page-item"
              nextLinkClassName="active"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Repos">
        <NotFoundRepos></NotFoundRepos>
      </div>
    );
  }
}

export default Repos;
