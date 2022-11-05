import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function HeaderComponents() {
  return (
    <div className={styles.headerParent}>
      <div>
        <Image
          src="/images/csvhikakun_logo_ver0.2.png"
          width={75}
          height={75}
          alt="csvhikrakunのロゴ"
        />
      </div>
      <div className={styles.headerChild}>
        <Link href="/#">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/mail">
          <a>Mail</a>
        </Link>
        <Link href="/privacy">
          <a>PrivacyPolicy</a>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponents;
