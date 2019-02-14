// import React
import React from "react";
import ReactDOM from "react-dom";

// import Faker
import faker from "faker";

// App component
const App = () => {
    return (
        <div className="ui container comments">
            <div class="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

// render the App component
ReactDOM.render(<App />, document.querySelector("#root"));
