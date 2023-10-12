export type MindMapContextType = {
  mindMapData: NodeType;
  setMindMapData: React.Dispatch<React.SetStateAction<NodeType>>;
};

export interface NodeType {
  id: string;
  text?: string;
  children: NodeType[];
}

export type RefType = React.RefObject<HTMLDivElement>;

export type ThreePositionType = {
  left: number,
  top: number,
}
