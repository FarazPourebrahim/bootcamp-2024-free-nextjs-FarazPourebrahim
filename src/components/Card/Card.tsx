"use client";

import styles from "./Card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use `next/navigation` for routing in Next.js 13+
import { MockTour } from "@/mocks/mockTours";

const typeToPersian: Record<MockTour["type"], string> = {
  Adventure: "ماجراجویی",
  Cultural: "فرهنگی",
  Historical: "تاریخی",
  Relaxation: "آرامش",
  Luxury: "لوکس",
  Family: "خانوادگی",
  Nature: "طبیعت‌گردی",
  Sports: "ورزشی",
};

export default function Card({ tour }: { tour: MockTour }) {
  const { id, title, location, price, duration, guideAvailable, type, image } =
    tour;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tour/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={400}
        height={400}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{location}</p>
        <p className={styles.details}>
          <span>{duration} روز</span>
          <span>{guideAvailable ? "با راهنما" : "بدون راهنما"}</span>
        </p>
        <p className={styles.type}>{typeToPersian[type]}</p>
        <p className={styles.price}>{price.toLocaleString()} تومان</p>
      </div>
    </div>
  );
}
