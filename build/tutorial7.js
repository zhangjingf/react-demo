var Comment = React.createClass({
	displayName: "Comment",

	rawMarkup: function () {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { _html: rawMarkup };
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			React.createElement(
				"span",
				null,
				"dangerouslySetInnerHTML = ",
				this.rawMarkup()
			)
		);
	}
});