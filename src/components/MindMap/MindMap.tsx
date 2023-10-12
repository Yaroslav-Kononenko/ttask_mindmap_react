import React, { useContext } from 'react';
import './MindMap.scss';
import { NodeType, RefType } from '../../types/general';
import { MindMapContext } from '../../App';

type Props = {
  refLink: RefType;
}

const MindMap: React.FC<Props> = ({ refLink }) => {
  const { mindMapData, setMindMapData } = useContext(MindMapContext)!;

  return (
    <div className='mindThree' ref={refLink}>
      <NodeThree data={mindMapData} setData={setMindMapData} />
    </div>
  );
};

type NodeProps = {
  data: NodeType;
  setData: (data: NodeType) => void;
};

const NodeThree: React.FC<NodeProps> = ({ data, setData }) => {
  const { mindMapData } = useContext(MindMapContext)!;

  const addChildren = (nodeId: string) => {
    const addEmptyChild = (node: NodeType) => {
      const createNewId = () => {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000000);
        return `${timestamp}${randomNum}`;
      };

      const updatedChild = {
        ...node,
        children: [...node.children, { id: createNewId(), text: createNewId(), children: [] }],
      };

      return updatedChild;
    };

    const updateData = (currentNode: NodeType): NodeType => {
      if (currentNode.id === nodeId) {
        return addEmptyChild(currentNode);
      } else if (currentNode.children) {
        return {
          ...currentNode,
          children: currentNode.children.map(updateData),
        };
      }
      return currentNode;
    };

    const updatedData = updateData(mindMapData);
    setData(updatedData);
  };

  return (
    <div className="node">
      <div className="node__text" onClick={() => addChildren(data.id)}>
        <span className="text-box">
          {data.text}
        </span>
        
      </div>
      {data.children.length !== 0  && (
        <div className="children">
          {data.children.map((child: any) => (
            <NodeThree
              key={child.id}
              data={child}
              setData={setData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MindMap;
