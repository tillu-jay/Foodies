import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 m-4 p-4 w-[16rem] h-[30rem] rounded-md bg-gray-100 hover:bg-orange-100">
      <img
        className="h-56 w-full res-logo rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold pt-5 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{deliveryTime} ETA</h4> */}
    </div>
  );
};

// Higher Order Component

// Input - RestaurantCard => RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 px-3 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
