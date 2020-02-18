export const initialState = {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
}

export const addCar = (state = initialState, action) => {
    console.log("action log for car :", action)
    switch(action.type){
        case 'IncrementCar':
            return state + action.payload
        case 'DecrementCar':
            return state - action.payload
        default: 
            return state
    }
}