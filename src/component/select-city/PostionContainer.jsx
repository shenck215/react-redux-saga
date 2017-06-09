'use strict';
import React, { Component } from 'react';
import Tab from './Tab';
import TabCon from './TabCon';
import classSet from '../util/classSet';
import {
    parseAddressName
} from './util/util';

class PostionContainer extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'PostionContainer';
    }
    handClick(e) {
        /* 阻止冒泡 */
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        let state = this.state;

        /* className */
        let className = classSet({
            'show' : this.props.show,
            'postion-container': true
        });


        /* 定位坐标 */
        let input = this.props.input;
           
        let style = {
            left: input.left,
            top: input.top,
            width: input.width
        }



        return (
            <div className={className} style={style} onClick={this.handClick.bind(this)}>
                <Tab {...this.props} />
                <TabCon {...this.props} />
            </div>
        )
    }
}



export default PostionContainer;




