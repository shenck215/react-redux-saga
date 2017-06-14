import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/plugin/maskPrompt/maskPrompt';
import {
    Button,
} from 'antd';

class Mask extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible || false,
        }
    }

    componentDidMount() {

        const {
            visible,
            type,
        } = this.props;

        if(visible){
            if(type === 'update' || type === 'delete'){
                
                this.setState({
                    promptShow: 'prompt-show',
                })
            }else{
                setTimeout(() => {
                    this.setState({
                        promptShow: 'prompt-show',
                    })
                },100);
            }
            
        }
    }

    hideWindowMask() {

        const {
            close,
        } = this.props;

        new Promise((resolve, reject) => {

            
            this.setState({
                promptShow: '',
            });

        })
            
        setTimeout(() => {
            this.setState({
                visible: false,
            })

            close();
        },400)
        

        
    }

    showWindowMask() {

        this.setState({
            visible: true,
        })
        
    }

    render() {

        const {
            content,
        } = this.props;
        
        const {
            visible,
            promptShow,
        } = this.state;

        return(
            
            <div>
                {
                    visible?
                    <div className="maskDiv">
                        <div ref="windowMask" className="window-mask" onClick={() => this.hideWindowMask()}>
                            
                        </div>
                        <div ref="prompt" className={`prompt ${promptShow}`}>
                            <div className="prompt-content">
                                {content}
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
                    : 
                    null
                }
            </div>
            
        );
    }
}

let close = (node) => {
    const unmountResult = ReactDOM.unmountComponentAtNode(node);
    if (unmountResult && node.parentNode) {
      node.parentNode.removeChild(node);
    }
    // const triggerCancel = args && args.length &&
    //   args.some(param => param && param.triggerCancel);
    // if (props.onCancel && triggerCancel) {
    //   props.onCancel(...args);
    // }
}


const MaskPrompt = (arg) => {

    let div = document.createElement('div');
    document.body.appendChild(div);

    ReactDOM.render(
        <Mask 
            content={arg.content}   
            visible={true}  
            close={() => close(div)}  
            type={arg.type}
        />,div
    )

    return {
        close: () => close(div),
    }

}
export default MaskPrompt;