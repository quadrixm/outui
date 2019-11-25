

const initialState = {
    data: {},
    apiSuccess: false,
    apiUpdated: false
};

export default function employees(state = initialState, action) {
    console.log(action.type);
    console.log(action.data);
    switch (action.type) {
        case 'GET_EMPLOYEES':
            console.log('get all');
            return {
                ...state,
                data: action.data.employees,
                apiSuccess: true,
                apiUpdated: !state.apiUpdated
            };
        case 'SAVE_EMPLOYEES':
            console.log('saved');
            return {
                ...state,
                apiSuccess: true,
                apiUpdated: !state.apiUpdated
            };
        case 'ERROR_EMPLOYEES':
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
