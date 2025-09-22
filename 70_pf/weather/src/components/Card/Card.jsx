import "./Card.css";

export default function Card({ title, icon, value, unit, children, className }) {
  return (
    <div className={`card ${className }`}>
      <div className="card_head">
        {title && <p className="card_title">{title}</p>}
        {icon && <img className="card_icon" src={icon} alt="" />}
      </div>
      <div className="card_body">
        {children ?? (
          <p className="card_value">
            {value} 
            {unit && <span className="card_unit"> {unit}</span>}
          </p>
        )}
      </div>
    </div>
  );
}