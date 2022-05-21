import React from "react";
import { SingleCard } from "./style";

const Card = ({ TargetIcon, title, subTitle }) => {
  return (
    <SingleCard>
      <TargetIcon></TargetIcon>
      <h5>{title}</h5>
      <small>{subTitle}</small>
    </SingleCard>
  );
};

export default Card;
