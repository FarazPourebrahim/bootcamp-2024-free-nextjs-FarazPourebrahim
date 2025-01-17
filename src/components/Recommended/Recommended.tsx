import { ReactElement } from "react";
import styles from "./Recommended.module.css";
import Link from "next/link";
import { mockTours } from "@/mocks/mockTours";
import Card from "@/components/Card/Card";

export default function Recommended(): ReactElement {
  return (
    <div className={styles.recommended}>
      <h3>یک ماجراجویی فراموش‌نشدنی در همین نزدیکی!</h3>
      <div className={styles["random-recommendations"]}>
        <Link href={"/search"} className={styles.more}>
          ▶
        </Link>
        {mockTours
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              location={item.location}
              price={item.price}
              duration={item.duration}
              guideAvailable={item.guideAvailable}
              type={item.type}
              image={item.image}
            />
          ))}
        <Link href={"/search"} className={styles.more}>
          ◀
        </Link>
      </div>
    </div>
  );
}
