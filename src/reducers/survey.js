

const initialState = {
    survey: {},
};

export default function survey(state = initialState, action) {
    switch (action.type) {
        case 'GET':
            console.log('get all');
            return {};
        case 'ERROR':
            console.log('error');
            return {};
        default:
            return {};
    }
};
