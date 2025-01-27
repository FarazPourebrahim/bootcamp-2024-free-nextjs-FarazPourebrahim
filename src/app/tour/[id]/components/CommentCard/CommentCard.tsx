import { ReactElement } from "react";
import { MockComment } from "@/mocks/mockComments";
import styles from "./CommentCard.module.css";
import Image from "next/image";

export default function CommentCard({
  comment,
}: {
  comment: MockComment;
}): ReactElement {
  return (
    <div className={styles.comment}>
      <div className={styles["comment-header"]}>
        <Image src={"/avatar.svg"} alt={""} width={50} height={50} />
        <span className={styles.user}>
          کاربر با آی دی {comment.userId}
        </span>{" "}
        میگه:
      </div>
      <div className={styles.content}>{comment.content}</div>
    </div>
  );
}
