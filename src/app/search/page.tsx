import SearchBox from "@/components/SearchBox/SearchBox";

import styles from "./page.module.css";

import TourTypeFilter from "@/app/search/components/TourTypeFilter/TourTypeFilter";
import PriceRangeFilter from "@/app/search/components/PriceRangeFilter/PriceRangeFilter";
import DurationFilter from "@/app/search/components/DurationFilter/DurationFilter";
import TourGuideFilter from "@/app/search/components/TourGuideFilter/TourGuideFilter";
import Card from "@/app/search/components/Card/Card";
import { mockTours } from "@/mocks/mockTours";
import Sort from "@/app/search/components/Sort/Sort";

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <TourTypeFilter />
        <PriceRangeFilter />
        <DurationFilter />
        <TourGuideFilter />
      </div>
      <div className={styles.main}>
        <SearchBox />
        <div className={styles["result-header"]}>
          <p className={styles.count}>{mockTours.length} نتیجه پیدا شد</p>
          <Sort />
        </div>
        <div className={styles.result}>
          {mockTours.map((item) => (
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
        </div>
      </div>
    </div>
  );
}
