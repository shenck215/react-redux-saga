import React from 'react';
import TagsStyle from '../../css/plugin/tags/tags';

class Tags extends React.Component {

    constructor(props) {
        super(props);
    }

    delete() {
        
        const {
            deleteSearchCashe,
        } = this.props;

        deleteSearchCashe();
    }

    render() {

        const {
            searchTitleText,
            searchText,
            key,
        } = this.props;

        return (
            <div className="search_text">
                <span className="search_text_title">{searchTitleText}</span>
                <span className="search_text_cont">{searchText}</span>
                <span className="anticon anticon-close" data-key={key} onClick={e => this.delete(e)}></span>
            </div>
        );
    }
}

export default Tags;