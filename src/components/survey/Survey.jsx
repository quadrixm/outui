import React, {Component} from "react";


export class Survey extends Component {

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
