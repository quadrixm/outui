import React, {Component} from "react";


export class AssignedSurvey extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onRemoveClick = (e) => {
        this.props.handleRemove();
    };

    render() {
        return (
            <div className="columns">
                <div className="column has-text-left">
                    <span>{this.props.suvey.name}</span>
                </div>
                <div className="column has-text-right">
                    <button className="button is-primary" onClick={this.onRemoveClick}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
