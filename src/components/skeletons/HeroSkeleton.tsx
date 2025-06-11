// src/components/skeletons/HeroSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HeroSkeleton = () => (
  <div className="py-20 text-center space-y-6">
    <Skeleton height={40} width={300} className="mx-auto" />
    <Skeleton height={25} width={200} className="mx-auto" />
    <Skeleton height={45} width={180} className="mx-auto rounded-xl" />
  </div>
);

export default HeroSkeleton;