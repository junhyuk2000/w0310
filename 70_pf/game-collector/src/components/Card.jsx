import React from "react";
import { useEffect, useState } from "react";
import "../css/Card.css";

export default function Card({
  id,
  img,
  alt,
  front,
  back,
  backImg,
  defaultFlipped = "false",
  delay = -1,
}) {
  return (
    <button className="card">
      <div className="card_inner">
        <img src={img} alt={alt} id={id} className={front} />
        <img src={backImg} alt={alt} id={id} className={back} />
      </div>
    </button>
  );
}
