import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = [
    { id: 1, name: "Swap in a V8 Engine", price: 3500 },
    { id: 2, name: "Special Road Racing Tires", price: 750 },
    { id: 3, name: "Cold Air Intake", price: 250 },
    { id: 4, name: "Tinted Windows", price: 200 }
];

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            console.log("feature added")
            return state.filter(feature => feature.id !== action.payload.id);
        case REMOVE_FEATURE:
            console.log("feature removed")
            return [...state, action.payload]
        default:
            return state;
    }
};

export default storeReducer;