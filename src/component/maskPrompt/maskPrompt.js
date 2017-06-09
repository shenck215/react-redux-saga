import React from 'react';
import '../../css/plugin/maskPrompt/maskPrompt';
import {
    Button,
} from 'antd';

class MaskPrompt extends React.Component{

    constructor(props) {
        super(props);
    }

    hideWindowMask() {
        
        this.refs.windowMask.style.display='none';
        this.refs.prompt.className = "prompt";
        
    }

    showWindowMask() {
        
        this.refs.windowMask.style.display='block';
        this.refs.prompt.className = "prompt prompt-show";
        
    }

    render() {

        const {
            children,
        } = this.props;

        return(
            <div>
                <div ref="windowMask" className="window-mask" onClick={() => this.hideWindowMask()}>
                    
                </div>
                <div ref="prompt" className="prompt">
                    <div className="prompt-content">
                        {children}
                        <Button 
                            type="primary"
                            style={{marginTop: 15}} 
                            onClick={() => this.hideWindowMask()}
                        >
                            <i className="anticon anticon-double-left"></i>返回
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MaskPrompt;