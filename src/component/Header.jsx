import React from "react";
import { Link } from "react-router-dom";
// import message from "../images/messages-1.jpg";
// import messag2 from "../images/messages-2.jpg";
import prfile from "../images/profile-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import Notification from "./Notification";
function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Admin Panel</span>
        </Link>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          {/* <li className="nav-item d-block d-lg-none">
              <Link className="nav-link nav-icon search-bar-toggle " to="#">
                <i className="bi bi-search"></i>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                to="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <Link to="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                to="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <Link to="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link to="#">
                    <img
                      src={message}
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link to="#">
                    <img
                      src={messag2}
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <Link to="#">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <Link to="#">Show all messages</Link>
                </li>
              </ul>
            </li> */}

          <li className="nav-item dropdown pe-3">
            <Dropdown>
              <Dropdown.Toggle
                className="bg-transparent border-0 mt-4 flex items-center justify-center"
                id="dropdown-basic"
              >
                <Link
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <img src={prfile} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                  </span>
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="flex items-center gap-1"
                  href="/user-profile"
                >
                  <FontAwesomeIcon className="mr-[10px]" icon={faUser} /> My
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="flex items-center gap-1" href="#">
                  <FontAwesomeIcon
                    className="mr-[10px]"
                    icon={faRightFromBracket}
                  />{" "}
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
