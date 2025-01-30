"use client";

import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./ReturnButton.module.css";

interface ReturnButtonProps {
  children: ReactNode;
}

export default function ReturnButton({
  children,
}: ReturnButtonProps): ReactElement {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button onClick={handleClick} className={styles.returnButton}>
      {children}
    </button>
  );
}
