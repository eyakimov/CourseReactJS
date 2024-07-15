var rootHTMLElement = document.getElementById('root');

var rootReactElement = ReactDOM.createRoot(rootHTMLElement);

var headingReactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from Ract'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is Awesome'
    ),
    React.createElement(
        'p',
        null,
        'lorem10'
    )
);

rootReactElement.render(headingReactElement);