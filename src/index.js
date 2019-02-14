// import React
import React from 'react';
import ReactDOM from 'react-dom';

// import Faker
import faker from 'faker';

// import components
import CommentDetail from './CommentDetail';

// App component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
};

// render the App component
ReactDOM.render(<App />, document.querySelector("#root"));
