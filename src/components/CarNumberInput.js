import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CarNumberInput.css";
import { connect } from "react-redux";
import { searchCar } from "../redux/actions/rootActions";
import { setCarNumberInputError } from "../redux/actions/rootActions";

const UKRAINIAN_CAR_NUMBER_REGEXP = /^[АВЕІКМНОРСТХABEIKMHOPCTX]{2}[0-9]{4}[АВЕІКМНОРСТХABEIKMHOPCTX]{2}$/;

class CarNumberInput extends Component {
    static propTypes = {
        searchCar: PropTypes.func,
        setCarNumberInputError: PropTypes.func
    };
    state = {
        inputValue: "",
        isInputError: false
    };

    handleInputValueChange = event => {
        this.setState({ inputValue: event.target.value, isInputError: false });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState(
            { inputValue: this.state.inputValue.toUpperCase() },
            () => {
                if (this.isCorrectCarNumber(this.state.inputValue)) {
                    this.props.searchCar(this.state.inputValue);
                } else {
                    this.setState({ isInputError: true });
                }
            }
        );
    };

    isCorrectCarNumber = carNumber => {
        return UKRAINIAN_CAR_NUMBER_REGEXP.test(carNumber);
    };

    shouldComponentUpdate(_nextProps, nextState) {
        if (nextState.isInputError !== this.state.isInputError) {
            this.props.setCarNumberInputError(nextState.isInputError);
        }
        return true;
    }

    render() {
        return (
            <header className="header">
                <form onSubmit={this.handleSubmit} className="search-form">
                    <label>
                        <h3 className="search-form__title">
                            Проверка авто по номерному знаку:
                        </h3>
                        <input
                            className="search-form__input"
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleInputValueChange}
                            placeholder="Номерной знак авто"
                        />
                    </label>
                </form>
                <span className="header__error-text">
                    {this.state.isInputError &&
                        "Введите корректный номерной знак"}
                </span>
            </header>
        );
    }
}
const mapStateToProps = _state => ({});
const mapDispatchToProps = { searchCar, setCarNumberInputError };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarNumberInput);
