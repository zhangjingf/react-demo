var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuhtor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		})
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});
var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author || !text) {
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.setState(author: '', text: '');
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
		        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
		        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
		        <input type="submit" value="Post" />
		     </form>
		);
	}
});
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: "comments.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
  	var comments = this.state.data;
  	comment.id = Date.now();
  	var newComments = comments.concat([comment]);
  	this.setState({data: newComments});
	$.ajax({
	    url: "infor.json",
	    dataType: 'json',
	    type: 'POST',
	    data: comment,
	    success: function(data) {
	        this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
	    	 this.setState({data: comments});
	        console.error(this.props.url, status, err.toString());
	    }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
    	<CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
});
ReactDOM.render(
	<CommentBox/>,
	document.getElementById("content")
)