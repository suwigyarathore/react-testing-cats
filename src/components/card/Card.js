import React, {useState} from "react";
import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";
import "./Card.css";

function Card({ name, phone, email, image, favorite }) {

const [isFavorite, setIsFavorite] = useState(favorite);   

 const [src , alt ] = isFavorite ? [heartFilled, "filled heart"] : [heartOutlined, "outlined heart"];    


  return (
    <div className="card">
      <div className="card-header">
          <img src={image.url} alt={image.alt} className="card-img" />
          <button className="heart" onClick={() => setIsFavorite(prev => !prev)} >
              <img src={src} alt={alt} />
          </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>

    </div>
  );
}

export default Card;
