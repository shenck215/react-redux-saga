import React, {
    Component,
} from 'react';
import {
    DatePicker,
} from 'antd';
/*eslint-disable */

const {
    MonthPicker,
    RangePicker,
} = DatePicker;

class DateApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <DatePicker placeholder="select day" />
                <br /><br />
                <MonthPicker placeholder="select month" />
                <br /><br />
                <RangePicker placeholder={['start time', 'end time']} />
            </div>
        );
    }
}

export default DateApp;