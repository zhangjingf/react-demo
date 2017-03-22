var CommentBox = React.createClass({
	loadCommentsFormServer: function() {
		$.ajax({
			url: "comments.json",
			dataType: "json",
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString);
			}.bind(this)
		})
	},
	getInitialState: function() {
		return {data:[]};
	},
	componentDidMount: function() {
		this.loadCommentsFormServer();
		setTimeout(this.loadCommentsFormServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
        		<CommentList data={this.state.data} />
			</div>
		);
	}
});
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('example')
);