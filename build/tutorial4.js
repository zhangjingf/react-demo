var Comment = React.createClass({
	displayName: "Comment",

	render: function () {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuhtor" },
				this.props.author
			),
			this.props.children
		);
	}
});