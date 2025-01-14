"use client";

import { useState } from "react";
import styles from "./TourGuideFilter.module.css";

export default function TourGuideFilter() {
  const [isGuideAvailable, setIsGuideAvailable] = useState<boolean | null>(
    null,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGuideAvailable(event.target.value === "yes");
  };

  return (
    <div className={styles.filter}>
      <p className={styles.label}>همراه با راهنما</p>
      <div className={styles.radioGroup}>
        <div className={styles.radioItem}>
          <input
            type="radio"
            id="guide-yes"
            name="guide"
            value="yes"
            onChange={handleChange}
            checked={isGuideAvailable === true}
            className={styles.radio}
          />
          <label htmlFor="guide-yes" className={styles.radioLabel}>
            بله
          </label>
        </div>
        <div className={styles.radioItem}>
          <input
            type="radio"
            id="guide-no"
            name="guide"
            value="no"
            onChange={handleChange}
            checked={isGuideAvailable === false}
            className={styles.radio}
          />
          <label htmlFor="guide-no" className={styles.radioLabel}>
            فرقی ندارد
          </label>
        </div>
      </div>
    </div>
  );
}
