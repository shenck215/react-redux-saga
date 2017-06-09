import React from 'react';

import {
    Steps,
} from 'antd';

import indexCss from '../../css/policypackage/index';

import Step01 from './step-01';

const Step = Steps.Step;

class Policypackage extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div key="1">
                    <div className={indexCss.title}>设置城市政策<span>浙江 - 杭州 - 市区</span></div>
                    <Steps current={0} className={indexCss.steps}>
                        <Step title="设置基本信息" />
                        <Step title="设置正式政策包明细" />
                        <Step title="设置预测包上浮策略" />
                        <Step title="设置参保材料" />
                    </Steps>
                </div>       
                <div>
                    <Step01/>
                </div>
            </div>
            
        );
    }
}

export default Policypackage;
