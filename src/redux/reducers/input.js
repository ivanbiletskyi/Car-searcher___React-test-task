import Actions from "../constants/actionTypes";

const defaultInputState = {
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
