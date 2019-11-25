import React, {Component} from "react";
import {employee, survey} from "../actions";
import { connect } from 'react-redux'


class Home extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onAddClick = (e) => {
        this.props.handleAdd();
    };

    render() {
        return (
            <div className="columns">
                <div className="column has-text-left">
                    <span>{this.props.suvey.name}</span>
                </div>
                <div className="column has-text-right">
                    <button className="button is-primary" onClick={this.onAddClick}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        employees: state.employees,
        surveys: state.surveys,
        apiUpdate: state.apiUpdate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEmployees: () => dispatch(employee.getEmployees()),
        saveEmployees: (data) => dispatch(employee.saveEmployees(data)),
        getSurveys: () => dispatch(survey.getSurveys())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
