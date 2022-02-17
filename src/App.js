import React from "react";
import Header from "./Header";
import storiesData from "./data/stories.js";

export default function App() {
  const stories = storiesData.map((story) => {
    return (
      <div
        key={story.handle}
        className={story.double ? "Story Rejection--width2" : "Story"}
      >
        <img
          alt={story.handle}
          className="Story-image"
          src={process.env.PUBLIC_URL + "/images/" + story.avatar}
        />
        <span>
          <span className="Story-fullname">{story.fullName}</span>
        </span>
        <span>
          <a target="_blank" rel="noopener noreferrer" href={story.website}>
            @{story.handle}
          </a>
          <span> </span>
          <span className="Story-bio">{story.bio}</span>
          <span> </span>
        </span>
        <p>{story.story}</p>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="App-style">{stories}</div>
    </div>
  );
}
