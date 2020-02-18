import React from 'react';
import { addFeature, addFeaturePrice } from "../actions/actions";
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log("additional feature props :", props)

  const addFeatureHandler = feature => {
    feature.preventDefault();
    props.addFeature(props.feature);
    props.addFeaturePrice(props.feature.price);
  }

  return (
    <li>
      <button onClick={addFeatureHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
export default connect(null, { addFeature, addFeaturePrice })(AdditionalFeature);
