import ResturantCard from "./ResturantCard";
import { useState } from "react";
// import { useState } from "react";
import { useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [serachQuery, setserachQuery] = useState("");
  const [filteredResturants, setfilteredResturants] = useState([]);
  const [AllResturants, setAllResturants] = useState([]);

  const fetchResturants = async () => {
    const api =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(api);
    const json = await data.json();
    // option chaining
    const resturantData = json?.data?.cards[2]?.data?.data?.cards;
    console.log(resturantData);
    setAllResturants(resturantData);
    setfilteredResturants(resturantData);
    return resturantData;
  };

  useEffect(() => {
    console.log("useffect");

    // make api calls here

    fetchResturants();
  }, []);

  // [] called once after render.
  // [resturants] called once after render + after evry time resturants changes

  console.log("rendered body()");

  const getSearch = (value) => {
    setserachQuery(value);
    console.log(value);
  };
  const filterData = (query, resturantsList) => {
    console.log("update the sate");
    const filteredData = resturantsList.filter((resturant) =>
      resturant.data.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredData);
    setfilteredResturants(filteredData);
  };

  if(filteredResturants.length === 0 ) return(
    <h1>no resturants match your filter!</h1>
  )

  return AllResturants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="serch-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={serachQuery}
          //   value={serachQuery}
          onChange={(e) => getSearch(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => filterData(serachQuery, AllResturants)}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredResturants.map((resturant) => (
          <ResturantCard key={resturant.data.id} {...resturant.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
