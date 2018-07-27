import React from 'react';

export default class Hoc extends React.Component {
    state = {
        arr: ['hello', 'im fine', 'vickey', 'and', 'zhou']
    }

    reverse = () => {
        const { arr } = this.state;
        this.setState({
            arr: arr.reverse()
        })
    }

    render() {
        const { arr } = this.state;
        return (
            <React.Fragment>
                {arr.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
                <button onClick={this.reverse}>click</button>
            </React.Fragment>
        )
    }
}