import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
    Modal,
    Icon,
    Button,
} from 'antd';
import img404 from '../../images/404/404';
import NotFoundPageStyle from '../../css/404/404';

class NotFoundPageApp extends React.Component {
    constructor(props) {
        super(props)
    }
    onOk = () => {

        browserHistory.goBack();
    }
    render() {
        
        return (
            <div>
                <div className = {NotFoundPageStyle.wrap}>
                    <div className = {NotFoundPageStyle.logo}>
                        <p>OOPS! - Could not Find it</p>
                        <img src = {img404} />
                        <div className = {NotFoundPageStyle.sub}>
                            <p><a href="#" onClick={this.onOk}>back</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(NotFoundPageApp)
