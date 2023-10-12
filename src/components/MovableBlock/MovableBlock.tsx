import React, { useState } from 'react';
import MindMap from '../MindMap/MindMap';
import { RefType } from '../../types/general';
import { ThreePositionType } from '../../types/general';
import './MovableBlock.css';

type Props = {
  blockRef: RefType;
  threePosition: ThreePositionType;
  setThreePosition: (threePosition: ThreePositionType) => void;
}

const MovableBlock: React.FC<Props> = ({blockRef, threePosition, setThreePosition}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const startDragging = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffsetX(event.clientX - threePosition.left);
    setOffsetY(event.clientY - threePosition.top);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const dragBlock = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      setThreePosition({ left: x, top: y });
    }
  };

  return (
    <div
      className="movableBlock"
      style={{ left: threePosition.left, top: threePosition.top }}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseMove={dragBlock}
    >
      <MindMap refLink={blockRef} />
    </div>
  );
};

export default MovableBlock;
