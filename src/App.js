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

const Story = styled.div`
  background: white;
  border: 7px solid #5b5b5b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  clear: both;
  margin: 10px;
  padding: 10px;
  width: 400px;
`;

const StoryImage = styled.img`
  float: left;
  margin-right: 10px;
  width: 100px;
`;

const StoryFullName = styled.span`
  display: flex;
  font-weight: bold;
`;

const StoryBio = styled.span`
  color: #193549;
  font-weight: bold;
  font-size: 12px;
`;

export default () => {
  baseStyles();

  const stories = storiesData.map(story => {
    return (
      <Story
        key={story.handle}
        className={story.double ? 'Rejection--width2' : null}
      >
        <StoryImage
          alt={story.handle}
          src={require('./images/' + story.avatar)}
        />
        <span>
          <StoryFullName>{story.fullName}</StoryFullName>
        </span>
        <span>
          <a target="_blank" href={story.website}>
            @{story.handle}
          </a>
          <span> </span>
          <StoryBio>{story.bio}</StoryBio>
          <span> </span>
        </span>
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
