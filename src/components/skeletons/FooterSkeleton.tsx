// src/components/skeletons/FooterSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FooterSkeleton = () => (
  <footer className="bg-base-300 py-10 px-4">
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
          <Skeleton height={20} width={80} />
          <Skeleton count={3} height={15} className="mt-2" />
        </div>
      ))}
    </div>
    <div className="text-center mt-6">
      <Skeleton width={200} height={15} className="mx-auto" />
    </div>
  </footer>
);

export default FooterSkeleton;