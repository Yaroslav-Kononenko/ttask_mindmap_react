import React from "react";
import './MovesButton.scss';

type Props = {
  position?: string;
}

export const MovesButton: React.FC<Props> = ({ position }) => {
  return(
    <div className={`movesblock movesblock--${position}`}>
      <button className="movesblock__button"></button>
    </div>
  )
};
