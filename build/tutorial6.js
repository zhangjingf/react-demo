var Comment = React.createClass({
	displayName: "Comment",

	render: function () {
		var md = new Remarkable();
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			md.render(this.props.children.toString())
		);
	}
});