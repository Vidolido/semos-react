import React from "react";

export class Dates extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dates: ['data']
        };
    }

    setDate = () => {
        let date = new Date().toString();

        this.setState({dates: [...this.state.dates, date]})
    }

    render() {
        return (<div>
            { this.state.dates && this.state.dates.map((date, i) => <p key={i}>{date}</p>)}
            <button onClick={this.setDate}>Set Date</button>
        </div>)
    }
}