import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SidebarLink from "./SidebarLink";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiHomeAlt, BiBarChartAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { PiWalletBold } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const SideBar = ({
  darkMode,
  toggleDarkMode,
  sidebarClosed,
  handleSidebarToggle,
}) => {
  
  const switchClassName = darkMode ? "switch dark" : "switch";
  const sidebarClassName = `${styles.sidebar} ${
    sidebarClosed ? styles.close : ""
  }`;

  return (
    // Your JSX code for the sidebar component
    // Replace HTML tags with JSX components and expressions
    // For example: <i className="icon moon"> => <i className={modeSwitchClassName}>

    <nav
      className={`${styles.sidebar} ${darkMode ? styles.dark : ""} ${
        sidebarClosed ? styles.close : ""
      }`}
    >
      <header>
        <div className={styles.imageText}>
          <span className={styles.image}>
            {darkMode ? (
              <img src="./Logo - Dark.png" alt="logo" />
            ) : (
              <img src="./Logo.png" alt="logo" />
            )}
          </span>

          <div className={`${styles.text} ${styles.headerText}`}>
            <span className={styles.name}>S.Tjay</span>
          </div>
        </div>

        <MdOutlineKeyboardArrowRight
          className={styles.toggle}
          onClick={handleSidebarToggle}
        />
      </header>
      <div className={styles.menuBar}>
        <div className={styles.menu}>
          <li className={styles.searchBox}>
            <a href="#">
              <FiSearch className={styles.icon} />
              <input type="search" placeholder="Search..." />
            </a>
          </li>
          <ul className={styles["menu-links"]}>
            <SidebarLink
              icon={<BiHomeAlt className={styles.icon} />}
              text={"Dashbord"}
              to={"/"}
            />

            <SidebarLink
              icon={<BiBarChartAlt2 className={styles.icon} />}
              text={"Revenue"}
              to={"/revenue"}
            />

            <SidebarLink
              icon={<IoIosNotificationsOutline className={styles.icon} />}
              text={"Notification"}
              to={"/notification"}
            />

            <SidebarLink
              icon={<SiGoogleanalytics className={styles.icon} />}
              text={"Analytics"}
              to={"/analytics"}
            />

            <SidebarLink
              icon={<AiOutlineHeart className={styles.icon} />}
              text={"Likes"}
              to={"/likes"}
            />

            <SidebarLink
              icon={<PiWalletBold className={styles.icon} />}
              text={"Wallets"}
              to={"/wallets"}
            />
          </ul>
        </div>

        <div className={styles.bottomContent}>
          <li className="">
            <a href="#">
              <i className={styles.icon}>
                <RiLogoutBoxLine />
              </i>
              <span className={`${styles.text} ${styles.navText}`}>Logout</span>
            </a>
          </li>
          <li className={styles.mode}>
            <div className={styles.moonSun}>
              {darkMode ? (
                <i className={`${styles.icon} ${styles.moon}`}>
                  <MdDarkMode />
                </i>
              ) : (
                <i className={`${styles.icon} ${styles.sun}`}>
                  <MdOutlineLightMode />
                </i>
              )}
            </div>
            <span className={`${styles.modeText} ${styles.text}`}>
              Theme{darkMode ? " Light" : " Dark"}
            </span>
            <div
              className={`${styles.toggleSwitch} ${styles[switchClassName]}`}
              onClick={toggleDarkMode}
            >
              <span className={styles.switch}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
