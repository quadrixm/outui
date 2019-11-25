import React, {Component} from "react";
import {employee, survey} from "../actions";
import {connect} from 'react-redux'
import {Survey} from "./survey/Survey";
import {AssignedSurvey} from "./survey/AssignedSurvey";


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

    getEmployeeOptions = () => {
        let employeeOptions = [];
        for (let i in this.props.employees) {
            let employee = this.props.employees[i];
            employeeOptions.push(<option value={employee.id}>{employee.name}</option>)
        }
        return employeeOptions;
    };

    handleAdd = (survey) => {
        alert(survey.name + " Added");
    };

    handleRemove = (survey) => {
        alert(survey.name + " Removed");
    };

    getSurveysOptions = () => {
        let surveyOptions = [];
        for (let i in this.props.surveys) {
            let survey = this.props.surveys[i];
            surveyOptions.push(<Survey
                survey={survey}
                handleAdd={this.handleAdd}
            />)
        }
        return surveyOptions;
    };


    getAssignedSurveysOptions = () => {
        let surveyOptions = [];
        for (let i in this.props.surveys) {
            let survey = this.props.surveys[i];
            surveyOptions.push(<AssignedSurvey
                survey={survey}
                handleRemove={this.handleRemove}
            />)
        }
        return surveyOptions;
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h3>Select Employee</h3>
                            <div className="select">
                                <select>
                                    {this.getEmployeeOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h3>Survey List</h3>
                            {this.getSurveysOptions()}
                        </div>
                        <div className="column has-text-centered">
                            <h3>Assign Survey</h3>
                            {this.getAssignedSurveysOptions()}
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
        employees: state.employees.data,
        surveys: state.surveys.data,
        apiUpdate: state.employees.apiUpdate,
        apiSuccess: state.employees.apiSuccess
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
