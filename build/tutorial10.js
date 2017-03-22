var CommentList = React.createClass({
	displayName: "CommentList",

	render: function () {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author, key: comment.id },
				comment.text
			);
		});
		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
		);
	}
});
ReactDOM.render(React.createElement(CommentList, null), document.getElementById("content"));