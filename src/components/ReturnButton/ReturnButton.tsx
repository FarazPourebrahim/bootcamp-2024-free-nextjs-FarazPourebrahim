"use client";

import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./ReturnButton.module.css";

interface ReturnButtonProps {
  path: string;
  children: ReactNode;
}

export default function ReturnButton({
  path,
  children,
}: ReturnButtonProps): ReactElement {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <button onClick={handleClick} className={styles.returnButton}>
      {children}
    </button>
  );
}
