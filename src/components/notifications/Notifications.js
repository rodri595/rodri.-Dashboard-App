import React, { useState } from "react";
import message from "../../assets/fonts/message.svg";
import heart from "../../assets/fonts/heart.svg";
import chat from "../../assets/fonts/chat.svg";
import ava1 from "../../assets/images/ava-1.png";
import bag from "../../assets/fonts/bag.svg";

const Notifications = () => {
  const [isnotificationsOpen, setisnotificationsOpen] = useState(false);
  return (
    <div
      className={isnotificationsOpen ? "notifications active" : "notifications"}
    >
      <button
        className="notifications__open"
        onClick={() => setisnotificationsOpen((prev) => !prev)}
      >
        <svg className="icon icon-bell">
          <path d="M13.855 21.9a2.992 2.992 0 0 1-5.71 0c.894.066 1.844.1 2.855.1a38.81 38.81 0 0 0 2.855-.1zM11 0a8 8 0 0 1 8 8v3c0 1.118.37 1.866 1.25 2.863l.663.74.193.23c.586.719.894 1.372.894 2.167 0 1.84-2.217 3.071-5.804 3.64l-.578.083c-.196.027-.396.051-.6.073l-.62.062c-.316.029-.64.053-.97.073l-.67.033c-.34.015-.688.025-1.042.03L11 21l-.716-.006c-.354-.005-.701-.015-1.041-.03l-.671-.033c-.33-.02-.654-.044-.97-.073l-.62-.062a26.768 26.768 0 0 1-.6-.073l-.578-.084C2.217 20.071 0 18.84 0 17c0-.795.308-1.448.894-2.168l.093-.113.212-.243.42-.465.3-.344C2.68 12.764 3 12.044 3 11V8a8 8 0 0 1 8-8zm0 2a6 6 0 0 0-6 6v3c0 1.69-.577 2.857-1.75 4.187l-.76.855-.146.18C2.096 16.55 2 16.778 2 17c0 .306.439.64 1.237.948l.316.113.349.11c.06.019.123.037.186.054l.396.104.21.05.442.097.231.046.485.087c.167.028.338.055.513.08l.54.073c.092.012.185.023.279.033l.578.06.602.05.31.022.638.035.66.024.68.012L11 19l.348-.002.68-.012.66-.024.322-.016.626-.04.602-.051.292-.029.566-.064.539-.072c.175-.026.346-.053.513-.08l.485-.088.231-.046.442-.096.21-.05.396-.105.186-.053.35-.11.315-.114C19.561 17.64 20 17.306 20 17c0-.25-.122-.509-.445-.905l-.238-.275-.567-.633C17.577 13.857 17 12.69 17 11V8a6 6 0 0 0-6-6z" />
        </svg>
        <span className="notifications__counter">2</span>
      </button>
      <div className="notifications__wrap">
        <div className="notifications__info h6">Recent Notification</div>
        <div className="notifications__list">
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-blue">
                <img className="notifications__pic" src={chat} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">
                  Sarah Saunders
                </div>
                <div className="notifications__time caption">8h</div>
              </div>
              <div className="notifications__text caption-sm">
                Commented on
                <span className="notifications__project">Collab Design</span>
              </div>
            </div>{" "}
          </a>
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-green">
                <img className="notifications__pic" src={bag} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">Glenn Greer</div>
                <div className="notifications__time caption">12h</div>
              </div>
              <div className="notifications__text caption-sm">
                Just pushaded
                <span className="notifications__project">
                  Sapiens Illustration
                </span>
              </div>
            </div>{" "}
          </a>
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-purple">
                <img className="notifications__pic" src={message} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">
                  Sarah Saunders
                </div>
                <div className="notifications__time caption">14h</div>
              </div>
              <div className="notifications__text caption-sm">
                Sent you a message 📪
              </div>
            </div>{" "}
          </a>
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-red">
                <img className="notifications__pic" src={heart} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">
                  Sarah Saunders
                </div>
                <div className="notifications__time caption">21h</div>
              </div>
              <div className="notifications__text caption-sm">
                Liked
                <span className="notifications__project">Folio Agency</span>
              </div>
            </div>{" "}
          </a>
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-blue">
                <img className="notifications__pic" src={chat} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">
                  Sarah Saunders
                </div>
                <div className="notifications__time caption">8h</div>
              </div>
              <div className="notifications__text caption-sm">
                Commented on
                <span className="notifications__project">Collab Design</span>
              </div>
            </div>{" "}
          </a>
          <a className="notifications__item" href="https://erazo.netlify.app/">
            <div className="notifications__ava">
              <img className="notifications__pic" src={ava1} alt />
              <div className="notifications__status bg-green">
                <img className="notifications__pic" src={bag} alt />
              </div>
            </div>
            <div className="notifications__details">
              <div className="notifications__line">
                <div className="notifications__user caption">Glenn Greer</div>
                <div className="notifications__time caption">12h</div>
              </div>
              <div className="notifications__text caption-sm">
                Just pushaded
                <span className="notifications__project">
                  Sapiens Illustration
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="notifications__btns">
          <a
            className="notifications__btn btn btn_black"
            href="https://erazo.netlify.app/"
          >
            See all incoming activity
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
