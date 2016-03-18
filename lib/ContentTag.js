const React = require('react');
const ReactTags = require('./ReactTags');

module.exports = React.createClass({

    propTypes: {
        onDelete: React.PropTypes.func.isRequired,
        tag: React.PropTypes.object.isRequired,
        content: React.PropTypes.node.isRequired
    },

    render(){
        return (
            <div className='ReactTags__tag ReactTags__tag_content'>
                {this.props.content}
                <span className='ReactTags__tag_content_close' onClick={this.props.onDelete}>&#x2715;</span>
            </div>
        );
    }
});
