import React, {Component} from "react";
import {employee, survey} from "../actions";
import {connect} from 'react-redux'


class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getEmployees();
        this.props.getSurveys();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h3>Select Employee</h3>
                            <div className="select">
                                <select>
                                    <option>Employee 1</option>
                                    <option>Employee 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h3>Survey List</h3>
                        </div>
                        <div className="column has-text-centered">
                            <h3>Assign Survey</h3>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <button className="button is-primary">
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        employees: state.employees,
        surveys: state.surveys,
        apiUpdate: state.apiUpdate
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getEmployees: () => dispatch(employee.getEmployees()),
        saveEmployees: (data) => dispatch(employee.saveEmployees(data)),
        getSurveys: () => dispatch(survey.getSurveys())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
