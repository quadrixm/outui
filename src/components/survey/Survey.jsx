import React, {Component} from "react";


export class Survey extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onAddClick = (e) => {
        this.props.handleAdd(this.props.survey);
    };

    render() {
        return (
            <div className="columns">
                <div className="column has-text-left">
                    <span>{this.props.survey.name}</span>
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
