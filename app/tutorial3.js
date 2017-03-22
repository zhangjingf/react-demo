var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>commentBox </h1>
				<CommentList/>
				<CommentForm/>
			</div>
		);
	}
})