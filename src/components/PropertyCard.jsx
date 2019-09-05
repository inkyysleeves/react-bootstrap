import React from 'react';

const PropertyCard = (props) => {
  return (
    <div key={props._id} className="propertyCard">
      <ol>{props.property.title}</ol>
      <li>{props.property.type}</li>
      <li>{props.property.city}</li>
      <li>{props.property.bedrooms}</li>
      <li>{props.property.bathrooms}</li>
      <li>{props.property.price}</li>
    </div>
  );
};
export default PropertyCard;
