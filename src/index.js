// import React
import React from 'react';
import ReactDOM from 'react-dom';

// import Faker
import faker from 'faker';

// import components
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// App component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                commentText="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                commentText="That's so great!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                commentText="Loving this"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

// render the App component
ReactDOM.render(<App />, document.querySelector("#root"));
