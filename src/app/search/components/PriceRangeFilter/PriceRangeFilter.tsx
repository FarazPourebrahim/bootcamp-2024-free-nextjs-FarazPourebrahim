"use client";

import { useState } from "react";
import styles from "./PriceRangeFilter.module.css";

export default function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    500000, 1000000,
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) =>
      name === "min"
        ? [Number(value), prevRange[1]]
        : [prevRange[0], Number(value)],
    );
  };

  return (
    <div className={styles.filter}>
      <p className={styles.label}>محدوده قیمت</p>
      <div className={styles.rangeSections}>
        <div className={styles.rangeSection}>
          <div className={styles.inputRow}>
            <label htmlFor="min" className={styles.inputLabel}>
              حداقل
            </label>
            <input
              type="number"
              id="min"
              name="min"
              step="200000"
              min="0"
              max="100000000"
              value={priceRange[0]}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100000000"
            step="500000"
            value={priceRange[0]}
            onChange={(e) =>
              handleChange({
                target: { name: "min", value: e.target.value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className={styles.slider}
          />
        </div>

        <div className={styles.rangeSection}>
          <div className={styles.inputRow}>
            <label htmlFor="max" className={styles.inputLabel}>
              حداکثر
            </label>
            <input
              type="number"
              id="max"
              name="max"
              step="200000"
              min="0"
              max="100000000"
              value={priceRange[1]}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100000000"
            step="500000"
            value={priceRange[1]}
            onChange={(e) =>
              handleChange({
                target: { name: "max", value: e.target.value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className={styles.slider}
          />
        </div>
      </div>
      <p className={styles.selectedRange}>
        از {priceRange[0]} تا {priceRange[1]} تومان
      </p>
    </div>
  );
}
