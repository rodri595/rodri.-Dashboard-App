import React, { useState } from "react";
import figure1 from "../../assets/images/figure-1.png";
import figure4 from "../../assets/images/figure-4.png";
import figure3 from "../../assets/images/figure-3.png";

const Search = ({ searchOpenMobile }) => {
  const [isrecentSearch, setisrecentSearch] = useState(false);
  return (
    <div
      className={`search ${isrecentSearch ? "active" : ""} ${
        searchOpenMobile ? "show" : ""
      }`}
    >
      <div className="search__field">
        <input className="search__input" type="text" placeholder="Search" />
        <button
          className="search__toggle"
          onClick={() => setisrecentSearch((prev) => !prev)}
        >
          <svg className="icon icon-search">
            <path
              fillRule="evenodd"
              d="M9.612 0C4.303 0 0 4.208 0 9.4c0 5.19 4.303 9.399 9.612 9.399 2.27 0 4.356-.77 6.001-2.058l3.124 3.048.083.07c.29.21.701.186.964-.072a.713.713 0 0 0-.002-1.023l-3.087-3.012A9.253 9.253 0 0 0 19.223 9.4C19.223 4.21 14.92 0 9.612 0zm0 1.448c4.49 0 8.13 3.56 8.13 7.951 0 4.392-3.64 7.952-8.13 7.952-4.491 0-8.132-3.56-8.132-7.952 0-4.391 3.64-7.951 8.132-7.951z"
            />
          </svg>
          <svg className="icon icon-close">
            <path
              fillRule="evenodd"
              d="M12.48 2.08a.75.75 0 1 0-1.06-1.06L6.822 5.616 2.227 1.02a.75.75 0 0 0-1.06 1.06l4.596 4.597-4.597 4.596a.75.75 0 1 0 1.061 1.06l4.596-4.596 4.596 4.597a.75.75 0 0 0 1.061-1.061L7.884 6.677 12.48 2.08z"
            />
          </svg>
        </button>
      </div>
      <div className="search__result">
        <div className="search__info caption-sm">Recent Searches</div>
        <div className="search__list">
          <a className="search__item" href="/">
            <div className="search__preview bg-pink">
              <img className="search__pic" src={figure1} alt="figure 1" />
            </div>
            <div className="search__text">
              Earning byitems
              <svg className="icon icon-arrow-right">
                <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
              </svg>
            </div>{" "}
          </a>
          <a className="search__item" href="/">
            <div className="search__preview bg-yellow">
              <img className="search__pic" src={figure4} alt="figure 1" />
            </div>
            <div className="search__text">
              This monthStatements
              <svg className="icon icon-arrow-right">
                <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
              </svg>
            </div>{" "}
          </a>
          <a className="search__item" href="/">
            <div className="search__preview bg-blue-light">
              <img className="search__pic" src={figure3} alt="figure 1" />
            </div>
            <div className="search__text">
              How manysales I got…
              <svg className="icon icon-arrow-right">
                <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
              </svg>
            </div>
          </a>
        </div>
        <button className="search__btn btn btn_purple btn_wide">
          Advance Search
        </button>
      </div>
    </div>
  );
};

export default Search;
