import * as axios from "axios";

export const getSurveys = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/surveys',
        })
            .then(response => {
                dispatch({
                    type: "GET_SURVEYS",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR_SURVEYS" })
            })
    }
};
