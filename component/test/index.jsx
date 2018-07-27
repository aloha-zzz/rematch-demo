import React from 'react';
import { withRouter } from "react-router-dom";
require('./../../css/index.css')

class Test extends React.Component {
    state = {
        num: 0
    }
    add = () => {
        this.setState({
            num: ++this.state.num
        })
    }
    link = () => {
        this.props.history.push("/Hoc")
    }

    render() {

        const { num } = this.state;
        return (
            <div>
                <button class='word' onClick={this.add}>num is {num}</button>
                <button onClick={this.link}>link</button>
            </div>
        )
    }
}

export default withRouter(Test)