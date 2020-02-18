export const initialState = {
    id: 1, 
    name: 'V-6 engine', 
    price: 1500
}

export const addEngine = (state = initialState, action) => {
    console.log("action log for engine :", action)
    switch (action.type){
        case 'IncrementEngine':
            return state + action.payload
        case 'DecrementEngine':
            return state - action.payload
        default:
            return state
    }
}


