import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
  

  render() {
    const { posts } = this.props
    const postList = posts.length ? (
    
    
        posts.map(post =>{

            return(
                <div className="post card" key={post.id}>
    
                <div className="card-content">
                <Link to={'/posts/'+post.id}>
                    
                    <span className="card-title">
                    {post.title}
                </span>
                 </Link>
                
                <p>{post.body}</p>
                  </div>      
                
              </div>
            )
         
    
    
            }) ):     
    
    
    (
      <div className="center">No Post</div>
      )
return (
      <div>
        <div className="home container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    posts:state.posts
  }
}


export default connect(mapStateToProps)(Home);
