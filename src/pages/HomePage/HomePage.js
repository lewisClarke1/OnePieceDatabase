import React, { useState, useEffect } from "react";
import { getCardsByExpansionId } from "../../services/getCardsByExpansionId";
import { getAllExpansions } from "../../services/getAllExpansions";

const HomePage = () => {
  const [expansions, setExpansions] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (expansions && expansions.length > 0) {
      getCardsByExpansionId(expansions[0].id)
        .then((cardsData) => {
          setCards(cardsData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [expansions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allExpansions = await getAllExpansions();

        if (allExpansions && allExpansions.length > 0) {
          setExpansions(allExpansions);
        } else {
          console.error("No expansions availables");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {cards ? (
        <div>
          {cards.map((card) => (
            <img
              key={card.id}
              src={"https://cardtrader.com" + card.image.url}
              height="400px"
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
