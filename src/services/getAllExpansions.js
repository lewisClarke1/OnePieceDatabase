// Here we will use an API call to retrieve all the expansions available from CardTrader
// This includes all the card games they have available so this will also filter down to just be one piece expansions using the game_id variable

import axiosInstance from "./apiconfig";

export const getAllExpansions = () => {
  var expansions = [];
  return axiosInstance
    .get("/expansions/")
    .then((response) => {
      response = response.data;
      response.forEach((expansion) => {
        if (expansion.game_id === 15) {
          expansions.push(expansion);
        }
      });
      return expansions;
    })
    .catch((error) => {
      console.error(error);
    });
};
