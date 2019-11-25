import React, {Component} from "react";


class Survey extends Component {

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
                <div className="column has-text-centered">
                    <span>{this.props.suvey.name}</span>
                    <button className="button is-primary" onClick={this.onAddClick}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
