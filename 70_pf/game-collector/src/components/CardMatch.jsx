import React from "react";
import Card from "./Card";
import "../css/CardMatch.css";
export default function CardMatch() {
  const cardInfo = [
    {
      id: 1,
      img: "/images/card1.jpg",
      alt: "카드이미지1",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 2,
      img: "/images/card2.jpg",
      alt: "카드이미지2",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 3,
      img: "/images/card3.jpg",
      alt: "카드이미지3",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 4,
      img: "/images/card4.jpg",
      alt: "카드이미지4",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 5,
      img: "/images/card5.jpg",
      alt: "카드이미지5",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 6,
      img: "/images/card6.jpg",
      alt: "카드이미지6",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 7,
      img: "/images/card7.jpg",
      alt: "카드이미지7",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 8,
      img: "/images/card8.jpg",
      alt: "카드이미지8",
      backImg: "/images/card_back.jpg",
    },
    {
      id: 9,
      img: "/images/card9.jpg",
      alt: "카드이미지9",
      backImg: "/images/card_back.jpg",
    },
  ];
  return (
    <div>
      <h2 className="game_title">Card Match</h2>
      <div className="card_board">
        {cardInfo.reduce((acc, cur, i) => {
          acc.push(
            <Card
              key={`${cur.id}-a`}
              id={cur.id}
              img={cur.img}
              alt={cur.alt}
              front="card_front"
              back="card_back"
              backImg={cur.backImg}
              delay={i * 100}
            />,
            <Card
              key={`${cur.id}-b`}
              id={cur.id}
              img={cur.img}
              alt={cur.alt}
              front="card_front"
              back="card_back"
              backImg={cur.backImg}
              delay={i * 100 + 50}
            />
          );
          return acc;
        }, [])}
      </div>
    </div>
  );
}
