import React, { useState } from "react";

import SideBar from "../components/sidebar/SideBar";
import Page from "../components/page/Page";
import Salute from "../components/Salute/Salute";
import SliderCard from "../components/Slider/SliderCard";
import SearchBar from "../components/search/Search";

import figure1 from "../assets/images/figure-1.png";
import figure3 from "../assets/images/figure-3.png";
import figure2 from "../assets/images/figure-2.png";

import AvatarRod from "../assets/images/avatar-rod.png";
import Notifications from "../components/notifications/Notifications";

const Home = ({ isdarkmode, setisdarkmode }) => {
  const [issearchOpenMobile, setissearchOpenMobile] = useState(false);
  const [issidebarmobileOpen, setissidebarmobileOpen] = useState(false);

  return (
    <>
      <Page menuOpen={issidebarmobileOpen} darkMode={isdarkmode}>
        <SideBar
          setisdarkmode={setisdarkmode}
          sidebarmobileOpen={issidebarmobileOpen}
          setsidebarmobileOpen={setissidebarmobileOpen}
        />
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_border">
              <Salute />
              <div className="page__col">
                <div className="header">
                  <button
                    className="header__burger"
                    onClick={() => setissidebarmobileOpen((prev) => !prev)}
                  />

                  <SearchBar searchOpenMobile={issearchOpenMobile} />
                  <button
                    className={`header__search ${
                      issearchOpenMobile ? "active" : ""
                    }`}
                    onClick={() => setissearchOpenMobile((prev) => !prev)}
                  >
                    <svg className="icon icon-search">
                      <path
                        fillRule="evenodd"
                        d="M9.612 0C4.303 0 0 4.208 0 9.4c0 5.19 4.303 9.399 9.612 9.399 2.27 0 4.356-.77 6.001-2.058l3.124 3.048.083.07c.29.21.701.186.964-.072a.713.713 0 0 0-.002-1.023l-3.087-3.012A9.253 9.253 0 0 0 19.223 9.4C19.223 4.21 14.92 0 9.612 0zm0 1.448c4.49 0 8.13 3.56 8.13 7.951 0 4.392-3.64 7.952-8.13 7.952-4.491 0-8.132-3.56-8.132-7.952 0-4.391 3.64-7.951 8.132-7.951z"
                      />
                    </svg>
                  </button>

                  <Notifications />
                  <a className="header__user" href="https://erazo.netlify.app/">
                    <img
                      className="header__pic"
                      src={AvatarRod}
                      alt="figure 1"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="page__row page__row_border">
              <div className="page__col">
                <SliderCard />
                <div className="page__widgets">
                  <div className="widget widget_shadow">
                    <div className="widget__title">Earnings by item</div>
                    <div className="widget__list">
                      <a className="widget__item" href="/">
                        <div className="widget__preview bg-pink">
                          <img
                            className="widget__pic"
                            src={figure1}
                            alt="figure 1"
                          />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit
                            <svg className="icon icon-arrow-right">
                              <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Illustration
                          </div>
                        </div>{" "}
                      </a>
                      <a className="widget__item" href="/">
                        <div className="widget__preview bg-yellow">
                          <img className="widget__pic" src={figure2} alt />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit
                            <svg className="icon icon-arrow-right">
                              <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Illustration
                          </div>
                        </div>{" "}
                      </a>
                      <a className="widget__item" href="/">
                        <div className="widget__preview bg-blue-light">
                          <img
                            className="widget__pic"
                            src={figure3}
                            alt="figure 1"
                          />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Collab UI Kit
                            <svg className="icon icon-arrow-right">
                              <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z" />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Coded Template
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="widget widget_chart widget_pink">
                    <div className="widget__title">Earnings</div>
                    <div className="widget__wrap">
                      <div
                        className="widget__chart widget__chart_earning"
                        style={{ position: " relative" }}
                      >
                        <div className="resize-triggers">
                          <div className="expand-trigger">
                            <div
                              style={{ width: "261px", height: "206px" }}
                            ></div>
                          </div>
                          <div className="contract-trigger"></div>
                        </div>
                      </div>
                      <div className="widget__btns">
                        <button className="widget__btn btn btn_purple btn_wide">
                          Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_pb60">
                    <div className="widget__title">Your earning this month</div>
                    <div className="widget__counter title title_md color-purple">
                      479.4
                    </div>
                    <div className="widget__text">
                      Update your payout method in Settings
                    </div>
                    <a className="widget__btn btn btn_white btn_wide" href="/">
                      Withdraw All Earnings
                    </a>
                  </div>
                  <div className="widget widget_empty widget_p0">
                    <div className="widget__title">Affiliate Impressions</div>
                    <div
                      className="widget__chart widget__chart_impressions"
                      style={{ position: "relative" }}
                    >
                      <div style={{ minHeight: "335px" }}>
                        <div
                          className=" apexcharts-theme-light"
                          style={{ width: "324px", height: "320px" }}
                        >
                          <div className="resize-triggers">
                            <div className="expand-trigger">
                              <div
                                style={{ width: "325px", height: "321px" }}
                              ></div>
                            </div>
                            <div className="contract-trigger"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
