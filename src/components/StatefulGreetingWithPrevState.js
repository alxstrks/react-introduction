import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        },
        () => {
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttonText);
        });
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    // Note: React groups .setState() Async method calls to prevent multiple re-renders. It will group
    // them into one call, therefore console will log 5 times, but count only increments once..
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.incrementFive()}>
                    Increment Five
                </button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithPrevState;