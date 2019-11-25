import * as axios from "axios";

export const getEmployees = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/employees',
        })
            .then(response => {
                dispatch({
                    type: "GET",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR" })
            })
    }
};

export const saveEmployees = (data) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            data,
            url: 'http://localhost:8000/employees',
        })
            .then(response => {
                dispatch({
                    type: "SAVE",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR" })
            })
    }
};
