var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function () {
		return React.createElement(
			"div",
			{ className: "commmentBox" },
			"hello world, i am commmentBox"
		);
	}
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("content"));