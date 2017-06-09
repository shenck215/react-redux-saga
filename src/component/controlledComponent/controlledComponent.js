import React from 'react';
import {
    Input,
} from 'antd';

class ControlledComponent extends React.Component {

    // constructor(props) {
    //     super(porps);
    // }

    render() {
        return (
            <div>
                <Input key="1"  ref={node => this.node1 = node} />
                <Input key="2" ref={node => this.node2 = node} />
            </div>

        );
    }
}

export default ControlledComponent;