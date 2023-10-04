import React from "react";
import Link from "next/link";

import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={`container ${styles["header-customizer"]}`}>
        <div>
          <Link href="/" className={`link ${styles["logo"]}`}>
            NextEvents
          </Link>
        </div>
        <div>
          <Link href="/events" className="link">
            Browse All Events
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
