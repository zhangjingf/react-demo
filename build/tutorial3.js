var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function () {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"commentBox "
			),
			React.createElement(CommentList, null),
			React.createElement(CommentForm, null)
		);
	}
});