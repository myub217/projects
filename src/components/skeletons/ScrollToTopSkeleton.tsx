// src/components/skeletons/ScrollToTopSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ScrollToTopSkeleton = () => (
  <div className="fixed bottom-4 right-4">
    <Skeleton width={50} height={50} borderRadius="50%" />
  </div>
);

export default ScrollToTopSkeleton;