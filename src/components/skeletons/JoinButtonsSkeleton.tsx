// src/components/skeletons/JoinButtonsSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JoinButtonsSkeleton = () => (
  <div className="py-16 text-center space-y-4">
    <Skeleton height={30} width={200} className="mx-auto" />
    <div className="flex justify-center space-x-4">
      <Skeleton width={120} height={40} borderRadius={20} />
      <Skeleton width={120} height={40} borderRadius={20} />
    </div>
  </div>
);

export default JoinButtonsSkeleton;