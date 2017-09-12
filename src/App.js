import React from 'react';
import styled from 'styled-components';
import baseStyles from './styles/index';

import Header from './Header';

import storiesData from './data/stories.js';

const AppStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Story = styled.div`max-width: 350px;`;

export default () => {
  baseStyles();

  const stories = storiesData.map(story => {
    return (
      <Story
        key={story.handle}
        className={story.double ? 'Rejection--width2' : null}
      >
        <div>
          <h4>{story.fullName}</h4>
        </div>
        <div>
          <a target="_blank" href={story.website}>
            @{story.handle}
          </a>
          <span> </span>
          (<span>{story.bio}</span>)
          <span> </span>
        </div>
        <a href={'/story/' + story.handle}>
          <img alt={story.handle} src={'/images/' + story.avatar} />
        </a>
        <p>{story.story}</p>
      </Story>
    );
  });

  return (
    <div>
      <Header />
      <AppStyle>{stories}</AppStyle>
    </div>
  );
};
