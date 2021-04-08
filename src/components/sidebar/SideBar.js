import React, { useState } from "react";
import rodlogoDark from "../../assets/images/rodlogoDark.png";
import rodlogoWhite from "../../assets/images/rodlogoWhite.png";
import SideBarWrapper from "./sidebarWrapper/SideBarWrapper";

import SideBarBottom from "./sidebarBottom/SideBarBottom";

const SideBar = ({
  setisdarkmode,
  sidebarmobileOpen,
  setsidebarmobileOpen,
}) => {
  return (
    <div className={`sidebar ${sidebarmobileOpen ? "active" : ""}`}>
      <div className="sidebar__top">
        <button
          className="sidebar__close"
          onClick={() => setsidebarmobileOpen((prev) => !prev)}
        >
          <svg className="icon icon-close">
            <path
              fillRule="evenodd"
              d="M12.48 2.08a.75.75 0 1 0-1.06-1.06L6.822 5.616 2.227 1.02a.75.75 0 0 0-1.06 1.06l4.596 4.597-4.597 4.596a.75.75 0 1 0 1.061 1.06l4.596-4.596 4.596 4.597a.75.75 0 0 0 1.061-1.061L7.884 6.677 12.48 2.08z"
            />
          </svg>
        </button>
        <a className="sidebar__logo" href="https://erazo.netlify.app/">
          <img
            className="sidebar__pic sidebar__pic_black"
            src={rodlogoDark}
            alt="rodris. logo Dark"
          />
          <img
            className="sidebar__pic sidebar__pic_white"
            src={rodlogoWhite}
            alt="rodris. logo White"
          />
        </a>
        <button
          className="sidebar__burger"
          onClick={() => setsidebarmobileOpen((prev) => !prev)}
        />
      </div>
      <SideBarWrapper />
      <SideBarBottom setisdarkmode={setisdarkmode} />
    </div>
  );
};

export default SideBar;
