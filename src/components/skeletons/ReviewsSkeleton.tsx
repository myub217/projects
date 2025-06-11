// src/components/skeletons/ReviewsSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ReviewsSkeleton = () => (
  <section className="py-16 space-y-4">
    <Skeleton height={30} width={200} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-base-100 shadow-md space-y-2">
          <Skeleton circle width={50} height={50} />
          <Skeleton height={15} width={`80%`} />
          <Skeleton count={2} />
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSkeleton;