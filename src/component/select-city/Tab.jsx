'use strict';
import React, { Component } from 'react';
import classSet from '../util/classSet';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tab';
    }
    render() {
        return (
            <div className="tab">
                <TabBtns {...this.props}  />
            </div>
        )
    }
}


class TabBtns extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'TabBtns';
    }
    render() {
        let { params, index } = this.props;


        /**
         * [max 最大联动的层级]
         */
        let deepMap = params.deepMap;
        let max = deepMap.length;

         /* index不能大于max */
        if(index >= max) {
            index --;
        }


        let btnList = [];
        deepMap.forEach((v, i) => {
            let active = i === index ? true : false 
            btnList.push(<OneTabBtn active={active} dataKey={i} key={i} name={v.name} {...this.props} />)
        });


        return (
            <ul className="tab-btns">
                {btnList}
            </ul>
        )
    }
    
}

class OneTabBtn extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'OneTabBtn';
    }
    handleClick(e) {
        let { dataKey, changeState } = this.props;
        changeState({
            index: dataKey,
            valIndex: --dataKey
        });
    }
    render() {
        let prop = this.props;

        let className = classSet({
            'tab-btn': true,
            'active': prop.active
        });

        return (
            <li onClick={this.handleClick.bind(this)} className={className}>{this.props.name}</li>
        )
    }
}

export default Tab;