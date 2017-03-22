var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commmentBox">
				hello world, i am commmentBox
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox/>,
	document.getElementById("content")
);



