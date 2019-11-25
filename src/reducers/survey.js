

const initialState = {
    data: {},
    apiSuccess: false,
    apiUpdated: false
};

export default function survey(state = initialState, action) {
    switch (action.type) {
        case 'GET_SURVEYS':
            console.log('get all');
            return {
                ...state,
                data: action.data.surveys,
                apiSuccess: true,
                apiUpdated: !state.apiUpdated
            };
        case 'ERROR_SURVEYS':
            console.log('error');
            return {
                ...state,
                apiSuccess: false,
                apiUpdated: !state.apiUpdated
            };
        default:
            return state;
    }
};
