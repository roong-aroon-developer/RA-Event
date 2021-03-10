import React, { Fragment, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import WeekCardSkeleton from "./WeekCardSkeleton";
import "./WeekFeed.css";

const WeekCard = lazy(() => import("./WeekCard"));

const WeekFeed = () => {
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
    <Fragment>
      <div className="WeekText">This Week</div>
      {!isLoading ? (
        Data.filter(d => d.displayOn === "This Week").map((data) => (
          <Link
            style={{ textDecoration: "none" }}
            to={{ pathname: data.path }}
            key={data._id}
          >
            <Suspense fallback={<WeekCardSkeleton />}>
              <WeekCard
                title={data.name}
                date={data.date}
                tag={data.tags}
                src={data.img}
                alt={data.imgAlt}
              />
            </Suspense>
          </Link>
        ))
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default WeekFeed;
