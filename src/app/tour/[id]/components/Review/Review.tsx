import React, { ReactElement } from "react";
import styles from "./Review.module.css";
import CommentCard from "@/app/tour/[id]/components/CommentCard/CommentCard";

import { mockComments } from "@/mocks/mockComments";

interface ReviewProps {
  tourId: number;
}

export default function Review({ tourId }: ReviewProps): ReactElement {
  const filteredComments = mockComments.filter(
    (comment) => comment.tourId === tourId,
  );

  return (
    <div className={styles.section}>
      {filteredComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
