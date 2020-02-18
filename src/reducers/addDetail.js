export const initialState = {
    id: 2, 
    name: 'Racing detail package', 
    price: 1500 
}
export const addDetail = (state = initialState, action) => {
    console.log("action log for detail :", action)
    switch(action.type){
        case 'IncrementDetail':
            return state + action.payload
        case 'DecrementDetail':
            return state - action.payload
        default: 
            return state
    }
}