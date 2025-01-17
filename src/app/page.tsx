import { ReactElement } from "react";

import styles from "./page.module.css";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
}
