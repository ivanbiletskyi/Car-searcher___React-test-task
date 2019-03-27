import Actions from "../constants/actionTypes";

const defaultCarState = {
    info: null,
    isFetching: false,
    isError: false,
    error: { statusCode: null, message: "" }
};

export default function carReducer(carState = defaultCarState, action) {
    switch (action.type) {
        case Actions.CAR_INFO_REQUEST:
            return { ...defaultCarState, isFetching: true };
        case Actions.CAR_INFO_REQUEST_FAILURE:
            return { ...defaultCarState, isError: true, error: action.error };
        case Actions.CAR_INFO_REQUEST_SUCCESS:
            return { ...defaultCarState, info: action.carInfo };
        case Actions.SET_CAR_NUMBER_INPUT_ERROR:
            if (action.isError) {
                return defaultCarState;
            } else {
                return carState;
            }
        default:
            return carState;
    }
}
