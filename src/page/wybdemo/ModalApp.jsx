import React,{
    Component,
} from 'react';
import {
    Modal,
    Button,
} from 'antd';


/* eslint-disable */
class ModalApp extends Component {

    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        this.state = {
            visible: false,
        };
    }

    handleShowModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleHideModal = () => {
        this.setState({
            visible: false,
        });
        console.log('You Click Close !');
    }

    handleOkModal = () => {
        console.log('You Click Ok !');
    }

    render() {

        return(
            <div>
                <Button 
                    type="primary" 
                    onClick={this.handleShowModal}
                >
                    click
                </Button>
                <Modal 
                    title= 'demo'
                    maskClosable = {false}
                    visible={this.state.visible}
                    onOk={this.handleOkModal}
                    onCancel={this.handleHideModal}
                    okText='确定'
                    cancelText='取消'
                >
                    <p>keke</p>
                    <p>keke</p>
                    <p>keke</p>
                </Modal>
            </div>
            
        );
    }
}

export default ModalApp;