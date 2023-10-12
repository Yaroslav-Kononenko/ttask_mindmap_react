import './Header.scss';

type Props = {
  scale: number;
  setScale: (scale: number) => void;
  centerPosition: () => void;
}

export const Header: React.FC<Props> = ({ scale, setScale, centerPosition }) => {
  const handleSubmit = () => centerPosition();

  return(
    <header className="header">
      <div className="brand">
        <h2 className="brand__name">Services</h2>
        <div className="brand__logo">0</div>
      </div>

      <div className="nav">
        <div className="nav__itemlist">
          List view
        </div>

        <div className="nav__switcher">
          <button className="button button__centered" onClick={handleSubmit}>
          </button>
        </div>

        <div className="nav__scale-bar">
          <button className="scale-button">&minus;</button>
          <div className="scale-data" onClick={() => setScale(100)}>
            <span>{scale}%</span>
          </div>
          <button className="scale-button">&#43;</button>
        </div>
      </div>
    </header>  
  );
}
