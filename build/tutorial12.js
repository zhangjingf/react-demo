var Comment = React.createClass({
	displayName: "Comment",

	render: function () {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuhtor" },
				this.props.author
			),
			this.props.children
		);
	}
});
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
var CommentForm = React.createClass({
	displayName: "CommentForm",

	getInitialState: function () {
		return { author: '', text: '' };
	},
	handleAuthorChange: function (e) {
		this.setState({ author: e.target.value });
	},
	handleTextChange: function (e) {
		this.setState({ text: e.target.value });
	},
	handleSubmit: function (e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!author || !text) {
			return;
		}
		this.props.onCommentSubmit({ author: author, text: text });
		this.setState(author, text);
	},
	render: function () {
		return React.createElement(
			"form",
			{ className: "commentForm", onSubmit: this.handleSubmit },
			React.createElement("input", { type: "text", placeholder: "Your name", value: this.state.author, onChange: this.handleAuthorChange }),
			React.createElement("input", { type: "text", placeholder: "Say something...", value: this.state.text, onChange: this.handleTextChange }),
			React.createElement("input", { type: "submit", value: "Post" })
		);
	}
});
var CommentBox = React.createClass({
	displayName: "CommentBox",

	getInitialState: function () {
		return { data: [] };
	},
	componentDidMount: function () {
		$.ajax({
			url: "comments.json",
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.setState({ data: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit: function (comment) {
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({ data: newComments });
		$.ajax({
			url: "infor.json",
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function (data) {
				this.setState({ data: data });
			}.bind(this),
			error: function (xhr, status, err) {
				this.setState({ data: comments });
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit }),
			React.createElement(CommentList, { data: this.state.data })
		);
	}
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("content"));