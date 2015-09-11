import React from "react";
import Welcome from "./welcome";

export default class Greeting extends React.Component{
    render() {
        return <div className="greeting">
                    Hello, {this.props.name}!
                    <Welcome />
                </div>;
    }
}
