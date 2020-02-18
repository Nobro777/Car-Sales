import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature, addFeaturePrice } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  console.log("additional features props :", props)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
            {props.store.map(item => (
              <AdditionalFeature
                key={item.id}
                feature={item}
                addFeatureHandler={props.addFeatureHandler}
              />
          ))}
        </ol>
      ) : (
        <p>No more upgrades available</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    store: state.storeReducer
  }
}

export default connect(mapStateToProps, { addFeature, addFeaturePrice })(AdditionalFeatures);


// import React from 'react';
// import AdditionalFeature from './AdditionalFeature';

// const AdditionalFeatures = props => {
//   return (
//     <div className="content">
//       <h4>Additional Features</h4>
//       {props.additionalFeatures.length ? (
//         <ol type="1">
//           {props.additionalFeatures.map(item => (
//             <AdditionalFeature key={item.id} feature={item} />
//           ))}
//         </ol>
//       ) : (
//         <p>Nice looking car!</p>
//       )}
//     </div>
//   );
// };

// export default AdditionalFeatures;
