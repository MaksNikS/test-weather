export const degToCardinal = (deg) => {
  var val = Math.floor(deg / 22.5 + 0.5);
  var arr = [
    "North",
    "North-northeast",
    "Northeast",
    "East-northeast",
    "East",
    "East-southeast",
    "Southeast",
    "South-southeast",
    "South",
    "South-southwest",
    "Southwest",
    "West-southwest",
    "West",
    "West-northwest",
    "Northwest",
    "North-northwest",
  ];
  return arr[val % 16];
};
