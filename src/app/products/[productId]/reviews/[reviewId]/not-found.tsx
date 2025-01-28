"use client";
import { usePathname } from "next/navigation"

function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]
  return (
    <div>
        <h2>Reviw {reviewId} Not found!@! for product{productId}</h2>
    </div>
  )
}

export default NotFound