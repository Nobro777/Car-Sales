export const initialState = { 
    id: 3, 
    name: 'Premium sound system', 
    price: 500 
}

export const addSound = (state = initialState, action) => {
    console.log("action log for sound :", action)
    switch (action.type){
        case 'IncrementSound':
            return state + action.payload
        case 'DecrementSound':
            return state - action.payload
        default:
            return state
    }
}