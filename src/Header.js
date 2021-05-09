import React from "react";

export default () => {
  return (
    <div>
      <div className="app-header">
        <h1 className="app-title">
          <a href="/">We've all faced rejection.</a>
        </h1>
        <div>
          To add your own rejection story, please{" "}
          <a href="https://github.com/Rejectedus/rejected.us/pulls/">
            open a PR
          </a>{" "}
          or tweet me at <a href="https://twitter.com/jkup">@jkup</a>
        </div>
        <div>
          Created by <a href="https://jonkuperman.com">Jon Kuperman</a>
        </div>
      </div>
    </div>
  );
};
