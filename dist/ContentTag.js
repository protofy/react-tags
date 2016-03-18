'use strict';

var React = require('react');
var ReactTags = require('./ReactTags');

module.exports = React.createClass({
    displayName: 'exports',

    propTypes: {
        onDelete: React.PropTypes.func.isRequired,
        tag: React.PropTypes.object.isRequired,
        content: React.PropTypes.node.isRequired
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'ReactTags__tag ReactTags__tag_content' },
            this.props.content,
            React.createElement(
                'span',
                { className: 'ReactTags__tag_content_close', onClick: this.props.onDelete },
                '✕'
            )
        );
    }
});