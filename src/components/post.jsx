import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
      // console.log(res)
    });
    // this.setState({
    //   id: id
    // });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div> //we have a post
    ) : (
      <div className="center">Loading post..</div> //dont have a post
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
