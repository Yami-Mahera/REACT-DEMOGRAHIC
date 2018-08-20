import { GET_COUNTRIES, ERROR_GET_COUNTRIES } from "../configs/config-const";

export default function (state = null, action) {
    switch (action.type) {
        case GET_COUNTRIES :
            return action.payload;
        case ERROR_GET_COUNTRIES :
            return action.errors;
    }
    return state;
}