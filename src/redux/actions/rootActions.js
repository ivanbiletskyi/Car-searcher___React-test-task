import Actions from "../constants/actionTypes";

export const searchCar = carNumber => dispatch => {
    dispatch({ type: Actions.CAR_INFO_REQUEST, carNumber });
    fetch(`http://localhost:8080/api/v1/car-info/${carNumber}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(({ error: errorMessage }) => {
                    Promise.reject({
                        statusCode: response.status,
                        message: errorMessage
                    });
                });
            }
        })
        .then(({ result: carInfo }) =>
            dispatch({ type: Actions.CAR_INFO_REQUEST_SUCCESS, carInfo })
        )
        .catch(error =>
            dispatch({ type: Actions.CAR_INFO_REQUEST_FAILURE, error })
        );
};

export const setCarNumberInputError = isError => ({
    type: Actions.SET_CAR_NUMBER_INPUT_ERROR,
    isError
});
