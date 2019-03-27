import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CarInfo.css";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";

class CarInfo extends Component {
    static propTypes = {
        carInfo: PropTypes.shape({
            owner: PropTypes.string,
            year: PropTypes.number,
            crashesCount: PropTypes.number,
            ownersCount: PropTypes.number
        }),
        isFetching: PropTypes.bool,
        errorMessage: PropTypes.string
    };

    render() {
        const { isFetching, errorMessage, carInfo } = this.props;
        return (
            <main className="main">
                {!isFetching && !errorMessage && carInfo && (
                    <table className="main__car-info-table">
                        <tbody>
                            <tr>
                                <td>Владелец</td>
                                <td>{carInfo.owner}</td>
                            </tr>
                            <tr>
                                <td>Год производства</td>
                                <td>{carInfo.year}</td>
                            </tr>
                            <tr>
                                <td>Количество владельцев</td>
                                <td>{carInfo.ownersCount}</td>
                            </tr>
                            <tr>
                                <td>Факты ДТП</td>
                                <td>{carInfo.crashesCount}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {isFetching && (
                    <div className="main__loading-spinner">
                        <MDSpinner size="50" />
                    </div>
                )}
                {errorMessage}
            </main>
        );
    }
}

const mapStateToProps = state => ({
    carInfo: state.car.info,
    isFetching: state.car.isFetching,
    errorMessage: state.car.error.message
});

export default connect(mapStateToProps)(CarInfo);
