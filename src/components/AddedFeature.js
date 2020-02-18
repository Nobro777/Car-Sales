import React from 'react';

const AddedFeature = props => {
  console.log("added feature props :")

  const removeFeatureHandler = () => {
    props.removeFeatureHandler(props.feature);
  }

  return (
    <li>
      <button onClick={removeFeatureHandler} className="button">
        Remove
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
