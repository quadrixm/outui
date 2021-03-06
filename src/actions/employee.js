import * as axios from "axios";

export const getEmployees = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'http://localhost:8000/employees',
        })
            .then(response => {
                dispatch({
                    type: "GET_EMPLOYEES",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR_EMPLOYEES" })
            })
    }
};

export const saveEmployees = (data) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: 'http://localhost:8000/employees',
            data: {"assigned": data},
            headers: {'Content-Type': 'application/json' }
        })
            .then(response => {
                dispatch({
                    type: "SAVE_EMPLOYEES",
                    data: response.data,
                })
            })
            .catch(error => {
                dispatch({ type: "ERROR_EMPLOYEES" })
            })
    }
};
