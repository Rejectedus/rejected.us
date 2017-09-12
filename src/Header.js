import React from 'react';
import styled from 'styled-components';

const AppHeader = styled.div`
  background: white;
  border-bottom: 8px solid #56c6c0;
  padding-bottom: 20px;
  text-align: center;
`;

const AppTitle = styled.h1`margin: 0 0 20px 0;`;

export default () => {
  return (
    <div>
      <AppHeader>
        <AppTitle>
          <a href="/">They Rejected Us.</a>
        </AppTitle>
        <div>We've all faced rejection - these are our stories</div>
        <div>
          To add your own, please{' '}
          <a href="https://github.com/jkup/rejected.us/issues/new">
            open an issue
          </a>{' '}
          or tweet me at <a href="https://twitter.com/jkup">@jkup</a>
        </div>
      </AppHeader>
    </div>
  );
};
