"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./Header.module.css";

export default function Header(): ReactElement {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "خانه" },
    { href: "/search", label: "جستجو" },
    { href: "/history", label: "سوابق" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(pathname === link.href && styles.active)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
