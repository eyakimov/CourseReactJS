var rootHTMLElement = document.getElementById('root');
console.dir(rootHTMLElement);

var rootReactElement = ReactDOM.createRoot(rootHTMLElement);

var headingReactElement = React.createElement('h1', null, 'Hello JSX from Ract');
console.log(headingReactElement);

rootReactElement.render(headingReactElement);