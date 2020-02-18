export const initialState = {
    id: 4, 
    name: 'Rear spoiler', 
    price: 250
}

export const addSpoiler = (state = initialState, action) => {
    console.log("action log for spoiler :", action)
    switch (action.type){
        case 'IncrementSpoiler':
            return state + action.payload
        case 'DecrementSpoiler':
            return state - action.payload
        default:
            return state
    }
}