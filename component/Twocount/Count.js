import React from 'react';
import { connect } from 'react-redux';

const Count = props => (
    <div>
        <h3>{props.a}</h3>
        <button onClick={props.addA}>a add one</button>
        <h3>{props.b}</h3>
        <button onClick={props.addB}>b add one</button>
    </div>
);

const mapStateToProps = state => ({
    a: state.a,
    b: state.b,
});

const mapDispatchToProps = dispatch => {
    return { addA: dispatch.a.addOne, addB: dispatch.b.addOne };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Count);
