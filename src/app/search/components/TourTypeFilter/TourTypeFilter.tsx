import styles from "./TourTypeFilter.module.css";

export default function TourTypeFilter() {
  const tourTypes = [
    { value: "cultural", label: "فرهنگی" },
    { value: "adventure", label: "ماجراجویی" },
    { value: "luxury", label: "لوکس" },
    { value: "family", label: "خانوادگی" },
    { value: "nature", label: "طبیعت‌گردی" },
    { value: "historical", label: "تاریخی" },
    { value: "sports", label: "ورزشی" },
    { value: "relaxation", label: "آرامش" },
  ];

  return (
    <div className={styles.filter}>
      <p className={styles.label}>نوع تور</p>
      <div className={styles.checkboxGroup}>
        {tourTypes.map((type) => (
          <div key={type.value} className={styles.checkboxItem}>
            <label htmlFor={type.value} className={styles.checkboxLabel}>
              {type.label}
            </label>
            <input
              type="checkbox"
              id={type.value}
              value={type.value}
              className={styles.checkbox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
