import React from "react";

export class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        console.log("This log is from did mount");
    }

    componentDidUpdate() {
        console.log("This log is from did Update");
    }


    handleClick = (str) =>{
        str === 'increment'
        ?this.setState({
            counter: this.state.counter + 1,
        })
        :this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        return (
            <div>
                <p>Number: {this.state.counter}</p>
                <button onClick={()=>this.handleClick('increment')}>Increment</button>
                <button onClick={()=>this.handleClick('decrement')}>Decrement</button>
            </div>
        )
    }
}