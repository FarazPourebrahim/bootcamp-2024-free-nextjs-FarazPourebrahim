import { ReactElement } from "react";
import { MockTour, mockTours } from "@/mocks/mockTours";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import Image from "next/image";
import ReturnButton from "@/components/ReturnButton/ReturnButton";
import TourDetails from "@/app/tour/[id]/components/TourDetails/TourDetails";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props): ReactElement {
  const tour: MockTour | undefined = mockTours.find(
    (x) => x.id === Number(params.id),
  );

  if (!tour) {
    return notFound();
  }

  //TEMP
  const getRandomIndexes = (count: number, max: number): number[] => {
    const indexes = new Set<number>();
    while (indexes.size < count) {
      const randomIndex = Math.floor(Math.random() * max);
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  };

  const randomIndexes = getRandomIndexes(3, mockTours.length);
  const randomTours = randomIndexes.map((index) => mockTours[index]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles["main-header"]}>
          <h2 className={styles.title}>{tour.title}</h2>
          <ReturnButton path="/search">بازگشت</ReturnButton>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.image}>
          <Image src={tour.image} alt={tour.title} width={600} height={400} />
        </div>
        <TourDetails tourId={Number(params.id)} />
      </div>
      <div className={styles.recommended}>
        <h3 className={styles["recommended-header"]}>تورهای مشابه</h3>
        {randomTours.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
