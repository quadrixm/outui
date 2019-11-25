import * as axios from "axios";

export const getSurveys = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'localhost:8000//surveys',
        })
            .then(response => {
                dispatch({
                    type: "SUCCESS",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR" })
            })
    }
};
