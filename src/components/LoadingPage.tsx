import React from 'react';
import { ArrowRepeat } from 'react-bootstrap-icons';
import '../styles/block-styles/_loading.scss';

function LoadingPage() {
  return (
    <div className="LoadingPage">
      <div className="LoadingPage_flex-container">
        <ArrowRepeat className="LoadingPage_arrow"></ArrowRepeat>
      </div>
    </div>
  );
}

export default LoadingPage;
