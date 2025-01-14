import styles from "./Card.module.css";
import Image from "next/image";

type CardProps = {
  title: string;
  location: string;
  price: number;
  duration: number;
  guideAvailable: boolean;
  type:
    | "Relaxation"
    | "Cultural"
    | "Adventure"
    | "Luxury"
    | "Family"
    | "Nature"
    | "Historical"
    | "Sports";
  image: string;
};

const typeToPersian: Record<CardProps["type"], string> = {
  Adventure: "ماجراجویی",
  Cultural: "فرهنگی",
  Historical: "تاریخی",
  Relaxation: "آرامش",
  Luxury: "لوکس",
  Family: "خانوادگی",
  Nature: "طبیعت‌گردی",
  Sports: "ورزشی",
};

export default function Card({
  title,
  location,
  price,
  duration,
  guideAvailable,
  type,
  image,
}: CardProps) {
  return (
    <div className={styles.card}>
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
