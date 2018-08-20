import axios from "axios";
import { GET_COUNTRIES, ERROR_GET_COUNTRIES, GET_MORTALITY, ERROR_GET_MORTALITY } from "../configs/config-const";

const API_END_POINT = "http://api.population.io:80/1.0/";
const DEFAULT_PARAM = "25/today";

export const getCountries = () => {
    return function (dispatch) {
        axios(`${API_END_POINT}countries`).then(res => 
            dispatch({
                type: GET_COUNTRIES, 
                payload: res.data.countries
            })
        ).catch(error => 
            dispatch({
                type: ERROR_GET_COUNTRIES,
                errors: error.res.data.detail
            })
        );
    };
};

export const getMortality = (country) => {
    return function (dispatch) {
        return axios (`${API_END_POINT}mortality-distribution/${country}/male/${DEFAULT_PARAM}`).then(resMale => {
            axios(`${API_END_POINT}mortality-distribution/${country}/female/${DEFAULT_PARAM}`).then(resFemale => {
                dispatch({
                    type : GET_MORTALITY,
                    payload : {
                        country : country,
                        male : resMale.data.mortality_distribution,
                        female : resFemale.data.mortality_distribution
                    }
                });
            });
        }).catch(error => 
            dispatch({
                type: ERROR_GET_MORTALITY,
                errors: error.res.data.detail
            })
        );
    };
};