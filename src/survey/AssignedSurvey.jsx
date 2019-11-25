import React, {Component} from "react";


class AssignedSurvey extends Component {

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
                <div className="column has-text-centered">
                    <span>{this.props.suvey.name}</span>
                    <button className="button is-primary" onClick={this.onRemoveClick}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
