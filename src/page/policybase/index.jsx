import React from 'react';
import QueueAnim from "rc-queue-anim/lib";
import {
    Tabs,
    Tooltip,
} from 'antd';
import '../../css/policybase/index';
import BasicSettingApp from './basicSetting';
import InsuredMaterials from './insuredmaterials';

const TabPane = Tabs.TabPane;

class CityBasicSettingApp extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <QueueAnim>
                <div key="1">
                    <Tabs type="card" className="tabtitle">
                        <TabPane tab="基础项设置" disabled key="1"></TabPane>
                        <TabPane tab="基础城市设置" key="2">
                            <BasicSettingApp />
                        </TabPane>
                        <TabPane tab="参保材料设置" key="3">
                            <InsuredMaterials />
                        </TabPane>
                        
                    </Tabs>
                </div>
            </QueueAnim>
        );
    }
}


export default CityBasicSettingApp;