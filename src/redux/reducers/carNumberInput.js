import Actions from "../constants/actionTypes";

const defaultInputState = {
    //we need this flag in store to hide previous carInfo if user tried find another car, but had an error on carNumberInput
    isError: false
};

export default function inputReducer(inputState = defaultInputState, action) {
    switch (action.type) {
        case Actions.SET_CAR_NUMBER_INPUT_ERROR:
            return { ...inputState, isError: action.isError };
        default:
            return inputState;
    }
}
