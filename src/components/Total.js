import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log("total props :", props)
  return (
    <div className="content">
      <h4>Total Cost: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    car: state.carReducer,
    additionalPrice: state.priceReducer.additionalPrice
  };
}

export default connect(mapStateToProps)(Total);
