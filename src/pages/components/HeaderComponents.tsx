/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function HeaderComponents() {
  return (
    <header className="text-gray-600 body-font bg-blue-500">
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
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">Home</span>
            </a>
          </Link>
          <Link href="/about">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">About</span>
            </a>
          </Link>
          <Link href="/blog">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">Blog</span>
            </a>
          </Link>
          <Link href="/mail">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">Mail</span>
            </a>
          </Link>
          <Link href="/privacy">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">PrivacyPolicy</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
