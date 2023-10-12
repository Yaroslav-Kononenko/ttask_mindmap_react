import React, { useState, createContext, useRef, useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { MovesButton } from './components/MovesButton/MovesButton';
import MovableBlock  from './components/MovableBlock/MovableBlock';
import { NodeType, MindMapContextType } from './types/general';

export const MindMapContext = createContext<MindMapContextType | undefined>(undefined);

const initialData: NodeType = {
  id: '1',
  text: 'Categories',
  children: [],
};

const App: React.FC = () => {
  const [ mindMapData, setMindMapData ] = useState<NodeType>(initialData);
  const [ scale, setScale ] = useState<number>(100);
  const [ threePosition, setThreePosition ] = useState({ left: 0, top: 0 });
  const blockRef = useRef<HTMLDivElement>(null);
  const positions = ['top', 'right', 'bottom', 'left'];
  const centerPosition = () => {
    if (blockRef.current) {
      const width = blockRef.current.getBoundingClientRect().width;
      const initialPosition = { left: window.innerWidth / 2 - width / 2, top: 200 };
      setThreePosition(initialPosition);
    }
  };

  useEffect(() => {
    centerPosition();
  }, []);

  return (
    <MindMapContext.Provider value={{ mindMapData, setMindMapData }}>
      <div className="app">
        <Header
          scale={scale}
          setScale={setScale}
          centerPosition={centerPosition}
        />
        <main className="main">
          <MovableBlock
            blockRef={blockRef}
            threePosition={threePosition}
            setThreePosition={setThreePosition}
          />
          {positions.map((position: string) => 
              <MovesButton position={position} key={position} />
            )
          }
        </main>
      </div>
    </MindMapContext.Provider>
  );
}

export default App;
