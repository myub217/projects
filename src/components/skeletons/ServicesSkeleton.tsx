// src/components/skeletons/ServicesSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesSkeleton = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="p-4 border rounded-xl bg-base-100 shadow-md">
          <Skeleton height={100} />
          <Skeleton height={20} className="mt-4" />
          <Skeleton count={2} />
        </div>
      ))}
    </section>
  );
};

export default ServicesSkeleton;