'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'exports',

    propTypes: {
        onDelete: React.PropTypes.func.isRequired,
        tag: React.PropTypes.object.isRequired,
        children: React.PropTypes.node
    },

    render: function render() {
        return React.createElement(
            'button',
            { className: 'ReactTags__tag ReactTags__tag_simple', title: 'Click to remove tag', onClick: this.props.onDelete },
            React.createElement(
                'span',
                { className: 'ReactTags__tagName' },
                this.props.tag.name
            )
        );
    }
});