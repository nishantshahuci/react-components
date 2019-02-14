// import React
import React from 'react';

// CommentDetail component
const CommentDetail = props => {
    const {avatar, author, timeAgo, commentText} = props;
    return (
        <div class="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">{commentText}</div>
            </div>
        </div>
    );
};

// export the component
export default CommentDetail;
