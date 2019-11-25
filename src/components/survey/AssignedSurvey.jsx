import React, {Component} from "react";


export class AssignedSurvey extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onRemoveClick = (e) => {
        this.props.handleRemove(this.props.survey);
    };

    render() {
        return (
            <div className="columns">
                <div className="column has-text-left">
                    <span>{this.props.survey.name}</span>
                </div>
                <div className="column has-text-right">
                    <button className="button is-danger" onClick={this.onRemoveClick}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
