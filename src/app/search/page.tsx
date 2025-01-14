import SearchBox from "@/components/SearchBox/SearchBox";

import TourTypeFilter from "@/app/search/components/TourTypeFilter/TourTypeFilter";

import styles from "./page.module.css";
import PriceRangeFilter from "@/app/search/components/PriceRangeFilter/PriceRangeFilter";
import DurationFilter from "@/app/search/components/DurationFilter/DurationFilter";
import TourGuideFilter from "@/app/search/components/TourGuideFilter/TourGuideFilter";

export default function page() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <TourTypeFilter />
        <PriceRangeFilter />
        <DurationFilter />
        <TourGuideFilter />
      </div>
      <div className={styles.main}></div>
    </div>
  );
}
