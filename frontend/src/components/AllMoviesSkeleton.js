import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllMoviesSkeleton = () => {
  return Array(9)
    .fill()
    .map((item, index) => {
      return (
        <div key={index}>
          <SkeletonTheme baseColor="#313131" highlightColor="525252">
            <div className="flex flex-col gap-4">
              <div style={{ height: "300px", width: "100%" }}>
                <Skeleton width={`100%`} height={`100%`} />
              </div>
              <div className="grid grid-flow-col items-center">
                <p>
                  <Skeleton width={`50%`} height={`100%`} />
                </p>
                <p className="text-right">
                  <Skeleton width={`20%`} height={`100%`} />
                </p>
              </div>

              <p>
                <Skeleton width={`100%`} height={`50px`} />
              </p>
            </div>
          </SkeletonTheme>
        </div>
      );
    });
};

export default AllMoviesSkeleton;
