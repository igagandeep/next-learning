import React from "react";
import { notFound } from "next/navigation";

async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Product details: {productId}, ReviewDetails {reviewId}
    </h1>
  );
}

export default ReviewDetails;
