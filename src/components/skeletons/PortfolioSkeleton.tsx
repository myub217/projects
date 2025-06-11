// src/components/skeletons/PortfolioSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PortfolioSkeleton = () => {
  return (
    <section className="py-16 space-y-6">
      <Skeleton height={30} width={250} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-base-100 shadow">
            <Skeleton height={160} />
            <Skeleton height={20} className="mt-2" />
            <Skeleton width={80} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSkeleton;