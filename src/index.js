import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';


var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
            </div>

        );
    }
});
// We need to say React take this component generated HTML and put it on the page (in the DOM)
// RENDERING COMPONENT TO THE DOM
ReactDOM.render(<App />, document.querySelector('.container')); // create an instance of App class: <App></App> - and that what we are sending to the DOM.
//ReactDOM.render( INSTANCE OF COMPONENT  ,  WHERE TO RENDER IT);
