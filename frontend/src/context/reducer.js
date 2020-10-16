export const initialState = {
    journey: [{
        id: null,
        status: null,
        receiver: null,
        name: null,
        success: null
    }],
    filter: [{
        id: null,
        amount: null,
        name: null
    }]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_JOURNEY': 
            return {
                ...state,
                journey: action.journey
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    };
}

export default reducer;