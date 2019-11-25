

const initialState = {
    employees: {},
};

export default function employees(state = initialState, action) {
    switch (action.type) {
        case 'GET':
            console.log('get all');
            return {};
        case 'SAVE':
            console.log('saved');
            return {};
        case 'ERROR':
            console.log('error');
            return {};
        default:
            return {};
    }
};
