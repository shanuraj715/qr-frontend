import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/app/logo/logo-wide.png";
import { list } from "./navbar_data";
import { BoxArrowInRight } from "react-bootstrap-icons";
import { useUser } from '@/context/user'

const ExternalLink = ({ item }) => {
  return (
    <a
      href={item.href}
      target={item.newTab ? "_blank" : "_self"}
      className="d-flex justify-content-center align-align-items-center"
    >
      <span className="pe-2 text-white">{item.icon}</span>
      {item.text}
    </a>
  );
};

const InternalLink = ({ item }) => {
  return (
    <Link
      href={item.href ?? "#"}
      className="d-flex justify-content-center align-align-items-center"
    >
      <span className="pe-2 text-white">{item.icon}</span>
      {item.text}
    </Link>
  );
};

function Navbar() {
  const { user } = useUser();

  return (
    <nav className={`${styles.navbar} fixed-top py-1`}>
      <div
        className={
          "container py-2 d-flex justify-content-between align-items-center "
        }
      >
        <div className="nav-left">
          <Link href="/">
            <i className="bi bi-emoji-heart-eyes"></i>
            <Image src={logo.src} width={110} height={36} alt="MY QR" />
          </Link>
        </div>
        <div className="nav-right d-flex justify-content-center align-items-center">
          {/* <span className="d-block d-sm-none">Click</span> */}
          <ul className="d-flex gap-3 gap-md-4 ">
            {list.map((item) => {
              return (
                <li key={item.id} className={styles.rightLinks}>
                  {item.external ? (
                    <ExternalLink item={item} />
                  ) : (
                    <InternalLink item={item} />
                  )}
                </li>
              );
            })}
          </ul>
          {!user.isLoggedIn && <Link href="/login" className={`${styles.loginBtn} ms-4`}>
            <span>
              <BoxArrowInRight />
            </span>
            Login
          </Link>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
