import React from 'react';
import {
    Tooltip,
} from 'antd';

class MyTooltip extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const {
            ok,
            cancel,
            dom,
            trigger,
            children,
        } = this.props;

        return(
            <Tooltip
                trigger={trigger? trigger: "click"}
                title={dom}
            >
                {children}
            </Tooltip>
        );
    }
}