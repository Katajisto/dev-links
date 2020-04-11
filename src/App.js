import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const linkList = [
    {
      title: "CSS tricks: complete guide to flexbox.",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    },
    {
      title: "Emmet cheatsheet, VS code",
      link: "https://docs.emmet.io/cheat-sheet/",
    },
    {
      title: "Emacs command cheat sheet",
      link: "http://www.rgrjr.com/emacs/emacs_cheat.html",
    },
  ];

  const [test, setTest] = useState("");

  function onInput(e) {
    setTest(e.target.value);
  }

  function containsKeyword(linkTitle) {
    return linkTitle.title.toLowerCase().includes(test.toLowerCase());
  }

  const renderList = linkList.filter(containsKeyword).map((x) => (
    <div className="link-container">
      <a href={x.link} className="list-a">
        {x.title}
      </a>
    </div>
  ));

  return (
    <div className="App">
      <h1 className="app-title">
        <i className="fas fa-code"></i> Developer link collection
      </h1>
      <h2 className="app-subtitle">devlinks.ktj.st</h2>
      <div className="input-container">
        <div>
          <i className="fas fa-search search-icon"></i>
          <input
            className="app-search-input"
            type="text"
            placeholder="What do you seek?"
            value={test}
            onChange={onInput}
          ></input>
        </div>
      </div>
      <div className="link-list">{renderList}</div>
      <footer>
        <h2 className="footer-text">
          <i class="fas fa-paper-plane"></i> Send a suggestion
        </h2>
        <form name="suggestionbox" className="suggest-form" method="post">
          <input type="hidden" name="form-name" value="suggestionbox" />
          <input
            className="suggest-input"
            type="text"
            placeholder="https://devlinks.ktj.st"
            name="link"
          ></input>
          <input type="submit" className="suggest-button" value="Send"></input>
        </form>
      </footer>
    </div>
  );
}

export default App;
