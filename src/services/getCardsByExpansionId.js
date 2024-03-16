import axiosInstance from "./apiconfig";

export const getCardsByExpansionId = (expansionId) => {
  var cards = [];
  return axiosInstance
    .get(`/blueprints/export?expansion_id=${expansionId}`)
    .then((response) => {
      response = response.data;

      response.forEach((card) => {
        // First need to check it is english
        var eng = false;
        var properties = card.editable_properties;
        for (var i = 0; i < properties.length; i++) {
          if (properties[i].name === "onepiece_language") {
            if (properties[i].default_value === "en") {
              eng = true;
            }
            break;
          }
        }
        // Then make sure it is a card and not a pack
        if (eng && card.fixed_properties.hasOwnProperty("collector_number")) {
          cards.push(card);
        }
      });
      return cards;
    })
    .catch((error) => {
      console.error(error);
    });
};
