var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<Comment author="zhang">this is one comment</Comment>
				<Comment author="feng"> this is "author" comment</Comment>
			</div>
		);
	}
});