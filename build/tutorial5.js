var CommentList = React.createClass({
	displayName: "CommentList",

	render: function () {
		return React.createElement(
			"div",
			{ className: "commentList" },
			React.createElement(
				Comment,
				{ author: "zhang" },
				"this is one comment"
			),
			React.createElement(
				Comment,
				{ author: "feng" },
				" this is \"author\" comment"
			)
		);
	}
});