import React, { lazy, Suspense } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import RecentCardSkeleton from "./RecentCardSkeleton";

import "react-multi-carousel/lib/styles.css";
import "./RecentFeed.css";

const RecentCard = lazy(() => import("./RecentCard"));

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1280, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const RecentFeed = () => {
  const [Data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("http://localhost:9000/events")
      .then((data) => data.json())
      .then((e) => {
        setData(e.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="FeedText">Upcoming Event</div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        focusOnSelect={true}
        itemClass="Item"
        className="container-card"
      >
        {!isLoading ? (
          Data.filter(d => d.displayOn === "Upcoming").map((data) => (
            <Suspense fallback={<RecentCardSkeleton />} key={data._id}>
              <Link
                to={{
                  pathname: data.path,
                }}
                key={data._id}
              >
                <RecentCard
                  title={data.name}
                  src={data.img}
                  alt={data.imgAlt}
                />
              </Link>
            </Suspense>
          ))
        ) : (
          <RecentCardSkeleton />
        )}
      </Carousel>
    </div>
  );
};

export default RecentFeed;
