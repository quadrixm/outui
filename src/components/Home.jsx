import React, {Component} from "react";
import {employee, survey} from "../actions";
import {connect} from 'react-redux'
import {Survey} from "./survey/Survey";
import {AssignedSurvey} from "./survey/AssignedSurvey";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignedSurveys: [],
            selectedEmployeeId: null
        }
    }

    componentDidMount() {
        this.props.getEmployees();
        this.props.getSurveys();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    getEmployeeOptions = () => {
        let employeeOptions = [<option value=''>Select an employee</option>];
        for (let i in this.props.employees) {
            let employee = this.props.employees[i];
            employeeOptions.push(<option value={employee.id}>{employee.name}</option>)
        }
        return employeeOptions;
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

    handleAdd = (survey) => {
        if (!this.state.selectedEmployeeId) {
            alert("Please select and employee");
            return;
        }
        if (survey) {
            let assignedSurveys = {...this.state.assignedSurveys};
            assignedSurveys[this.state.selectedEmployeeId].push(survey.id);
            this.setState({assignedSurveys})
        }
    };

    handleRemove = (survey) => {
        if (survey) {
            let assignedSurveys = {...this.state.assignedSurveys};
            assignedSurveys[this.state.selectedEmployeeId].push(survey.id);
            let index = assignedSurveys[this.state.selectedEmployeeId].indexOf(survey.id);
            if (index > -1) {
                assignedSurveys[this.state.selectedEmployeeId].splice(index, 1);
            }
            this.setState({assignedSurveys})
        }
    };

    handleEmployeeChange = (e) => {
        let selectedEmployeeId = e.target.value;
        if (selectedEmployeeId) {
            let assignedSurveys = {...this.state.assignedSurveys};
            if (!assignedSurveys[selectedEmployeeId]) {
                assignedSurveys[selectedEmployeeId] = [];
            }
            this.setState({assignedSurveys, selectedEmployeeId})
        }
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <h3>Select Employee</h3>
                            <div className="select">
                                <select onChange={this.handleEmployeeChange}>
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
